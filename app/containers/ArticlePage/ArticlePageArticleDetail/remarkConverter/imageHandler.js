import normalize from 'mdurl/encode';
import all from 'mdast-util-to-hast/lib/all';
export default image;

function image(h, node) {
  const props = { src: normalize(node.url), alt: node.alt };

  if (node.caption !== null && node.caption !== undefined) {
    props.caption = node.caption;
  }

  if (node['data-preLoad']) {
    props['data-position'] = node['data-position'];
    props['data-preLoad'] = node['data-preLoad'];
  }

  return h(node, 'img', props, all(h, node));
}
