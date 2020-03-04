/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */

import whitespace from 'is-whitespace-character';

export default image;

const lineFeed = '\n';
const exclamationMark = '!';
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
const tab = '\t';
const space = ' ';

function image(eat, value, silent) {
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
  let subqueue;
  let content;
  let marker;
  let length;
  let caption;
  let depth;
  let queue;
  let url;
  let now;
  let node;
  let dataPosition;
  let dataPreLoad;

  subvalue = '';
  while (index < value.length) {
    character = value.charAt(index);
    subvalue += character;

    if (character !== space && character !== tab) {
      break;
    }

    index++;
  }

  // Detect whether this is an image.
  if (character !== exclamationMark) {
    return;
  }

  character = value.charAt(++index);

  // Eat the opening.
  if (character !== leftSquareBracket) {
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
    // index = subvalue.length;
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

  // Eat the attributes.
  if (queue && character === '{') {
    // Eat the self-defined image attributes {caption: , data-position: , data-preLoad:  }
    index++;
    queue = '{';
    marker = '}';

    while (index < length) {
      character = value.charAt(index);

      if (character === marker) {
        break;
      }

      index += 1;
      queue += character;
    }
    index++;
    queue += '}';
    subvalue += queue;
    const obj = JSON.parse(queue);
    caption = obj.caption || null;

    if (!obj['data-position']) {
      console.log('Please enter "data-position":"" in image');
    }
    dataPosition = obj['data-position'];

    if (!obj['data-preLoad']) {
      console.log('Please enter "data-preLoad":"" in image');
    }
    dataPreLoad = obj['data-preLoad'];
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

  now = eat.now();
  let children;

  if (caption) {
    children = self.tokenizeInline(caption, now);
  }

  node = {
    type: 'image',
    children: children || null,
    url,
  };

  node.alt = self.decode.raw(self.unescape(content), now) || null;
  // new node attr
  node['data-position'] = dataPosition;
  node['data-preLoad'] = dataPreLoad;

  return eat(subvalue)(node);
}
