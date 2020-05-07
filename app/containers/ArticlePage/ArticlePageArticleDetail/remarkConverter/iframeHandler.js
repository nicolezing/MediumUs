import normalize from 'mdurl/encode';
export default iframe;

function iframe(h, node) {
  const props = { src: normalize(node.data.hProperties.src) };
  return h(node, 'iframe', props);
}
