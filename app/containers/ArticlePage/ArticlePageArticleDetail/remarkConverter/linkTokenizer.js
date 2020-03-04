/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */

import whitespace from 'is-whitespace-character';
// import locate from 'remark-parse/lib/locate/link';

export default link;
// link.locator = locate;
link.locator = (value, fromIndex) => value.indexOf('[', fromIndex);

const lineFeed = '\n';
const quotationMark = '"';
const apostrophe = "'";
const leftParenthesis = '(';
const rightParenthesis = ')';
const lessThan = '<';
const greaterThan = '>';
const leftSquareBracket = '[';
const backslash = '\\';
const rightSquareBracket = ']';
const graveAccent = '`';

function link(eat, value, silent) {
  const self = this;
  let subvalue = '';
  let index = 0;
  let character = value.charAt(0);
  const { pedantic } = self.options;
  const { commonmark } = self.options;
  const { gfm } = self.options;
  let closed;
  let count;
  let opening;
  let beforeURL;
  let beforeTitle;
  let subqueue;
  let hasMarker;
  let content;
  let marker;
  let length;
  let title;
  let depth;
  let queue;
  let url;
  let now;
  let exit;
  let node;

  // Eat the opening.
  if (character !== leftSquareBracket) {
    return;
  }

  // Exit when this is a link and we’re already inside a link.
  if (self.inLink) {
    return;
  }

  subvalue += character;
  queue = '';
  index += 1;

  // Eat the content.
  length = value.length;
  now = eat.now();
  depth = 0;

  now.column += index;
  now.offset += index;

  while (index < length) {
    character = value.charAt(index);
    subqueue = character;

    if (character === graveAccent) {
      // Inline-code in link content.
      count = 1;

      while (value.charAt(index + 1) === graveAccent) {
        subqueue += character;
        index += 1;
        count++;
      }

      if (!opening) {
        opening = count;
      } else if (count >= opening) {
        opening = 0;
      }
    } else if (character === backslash) {
      // Allow brackets to be escaped.
      index += 1;
      subqueue += value.charAt(index);
    } else if ((!opening || gfm) && character === leftSquareBracket) {
      // In GFM mode, brackets in code still count.  In all other modes,
      // they don’t.
      depth++;
    } else if ((!opening || gfm) && character === rightSquareBracket) {
      if (depth) {
        depth--;
      } else {
        // Allow white-space between content and url in GFM mode.
        if (!pedantic) {
          while (index < length) {
            character = value.charAt(index + 1);

            if (!whitespace(character)) {
              break;
            }

            subqueue += character;
            index += 1;
          }
        }

        if (value.charAt(index + 1) !== leftParenthesis) {
          return;
        }

        subqueue += leftParenthesis;
        closed = true;
        index += 1;

        break;
      }
    }

    queue += subqueue;
    subqueue = '';
    index += 1;
  }

  // Eat the content closing.
  if (!closed) {
    return;
  }

  content = queue;
  subvalue += queue + subqueue;
  index += 1;

  // Eat white-space.
  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    subvalue += character;
    index += 1;
  }

  // Eat the URL.
  character = value.charAt(index);
  queue = '';
  beforeURL = subvalue;

  if (character === lessThan) {
    index += 1;
    beforeURL += lessThan;

    while (index < length) {
      character = value.charAt(index);

      if (character === greaterThan) {
        break;
      }

      if (commonmark && character === lineFeed) {
        return;
      }

      queue += character;
      index += 1;
    }

    if (value.charAt(index) !== greaterThan) {
      return;
    }

    subvalue += lessThan + queue + greaterThan;
    url = queue;
    index += 1;
  } else {
    character = null;
    subqueue = '';

    while (index < length) {
      character = value.charAt(index);

      if (
        subqueue &&
        (character === quotationMark ||
          character === apostrophe ||
          (commonmark && character === leftParenthesis))
      ) {
        break;
      }

      if (whitespace(character)) {
        if (!pedantic) {
          break;
        }

        subqueue += character;
      } else {
        if (character === leftParenthesis) {
          depth++;
        } else if (character === rightParenthesis) {
          if (depth === 0) {
            break;
          }

          depth--;
        }

        queue += subqueue;
        subqueue = '';

        if (character === backslash) {
          queue += backslash;
          character = value.charAt(++index);
        }

        queue += character;
      }

      index += 1;
    }

    subvalue += queue;
    url = queue;
    index = subvalue.length;
  }

  // Eat white-space.
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;
    index += 1;
  }

  character = value.charAt(index);
  subvalue += queue;

  // Eat the title.
  if (
    queue &&
    (character === quotationMark ||
      character === apostrophe ||
      (commonmark && character === leftParenthesis))
  ) {
    index += 1;
    subvalue += character;
    queue = '';
    marker = character === leftParenthesis ? rightParenthesis : character;
    beforeTitle = subvalue;

    // In commonmark-mode, things are pretty easy: the marker cannot occur
    // inside the title.  Non-commonmark does, however, support nested
    // delimiters.
    if (commonmark) {
      while (index < length) {
        character = value.charAt(index);

        if (character === marker) {
          break;
        }

        if (character === backslash) {
          queue += backslash;
          character = value.charAt(++index);
        }

        index += 1;
        queue += character;
      }

      character = value.charAt(index);

      if (character !== marker) {
        return;
      }

      title = queue;
      subvalue += queue + character;
      index += 1;

      while (index < length) {
        character = value.charAt(index);

        if (!whitespace(character)) {
          break;
        }

        subvalue += character;
        index += 1;
      }
    } else {
      subqueue = '';

      while (index < length) {
        character = value.charAt(index);

        if (character === marker) {
          if (hasMarker) {
            queue += marker + subqueue;
            subqueue = '';
          }

          hasMarker = true;
        } else if (!hasMarker) {
          queue += character;
        } else if (character === rightParenthesis) {
          subvalue += queue + marker + subqueue;
          title = queue;
          break;
        } else if (whitespace(character)) {
          subqueue += character;
        } else {
          queue += marker + subqueue + character;
          subqueue = '';
          hasMarker = false;
        }

        index += 1;
      }
    }
  }

  if (value.charAt(index) !== rightParenthesis) {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  subvalue += rightParenthesis;

  url = self.decode.raw(self.unescape(url), eat(beforeURL).test().end, {
    nonTerminated: false,
  });

  if (title) {
    beforeTitle = eat(beforeTitle).test().end;
    title = self.decode.raw(self.unescape(title), beforeTitle);
  }

  node = {
    type: 'link',
    title: title || null,
    url,
  };

  exit = self.enterLink();
  node.children = self.tokenizeInline(content, now);
  exit();

  return eat(subvalue)(node);
}
