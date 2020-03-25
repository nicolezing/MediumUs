import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { selectArticleCover } from '../../../selectors';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import _ from 'lodash';
// import remarkIframe from 'remark-iframes';
import tokenizers from './remarkConverter/addTokenizer';
import imageHandler from './remarkConverter/imageHandler';
import remarkReactComponents from './remarkConverter/remark2reactComponents';
import iframeHandler from './remarkConverter/iframeHandler';
import articleDetail from './articleDetail';
import { Wrapper, WidthConstrainWrapper } from './Wrappers';
const { attributes } = require('hast-util-sanitize/lib/github.json');

function ArticlePageArticleDetail() {
  const detail = articleDetail.content;
  const addAttributes = { img: ['data*', 'caption', 'src', 'children'] };

  const articleDetailComponents = unified()
    .use(parse, { commonmark: true, footnotes: true })
    // .use(remarkIframe, {
    //   'www.youtube.com': {
    //     tag: 'iframe',
    //     width: 560,
    //     height: 315,
    //     disabled: false,
    //     replace: [['watch?v=', 'embed/'], ['http://', 'https://']],
    //     thumbnail: {
    //       format: 'http://img.youtube.com/vi/{id}/0.jpg',
    //       id: '.+/(.+)$',
    //     },
    //     removeAfter: '&',
    //   },
    //   // Youtube oEmbed example
    //   'youtu.be': {
    //     width: 560,
    //     height: 315,
    //     disabled: false,
    //     oembed: 'https://www.youtube.com/oembed',
    //   },
    // })
    .use(tokenizers)
    .use(remark2react, {
      toHast: { handlers: { image: imageHandler, iframe: iframeHandler } },
      sanitize: { attributes: _.merge(attributes, addAttributes) },
      remarkReactComponents,
    })
    .processSync(detail).contents;

  return (
    <Wrapper>
      <WidthConstrainWrapper>{articleDetailComponents}</WidthConstrainWrapper>
    </Wrapper>
  );
}

// ArticlePageArticleDetail.propTypes = {
//   // id: PropTypes.string.isRequired,
// };

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const { coverLarge } = selectArticleCover(state, id);
  return { id, coverLarge };
}

export default connect(mapStateToProps)(ArticlePageArticleDetail);
