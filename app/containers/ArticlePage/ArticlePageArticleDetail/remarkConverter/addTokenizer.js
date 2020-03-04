import linkTokenizer from './linkTokenizer';
import imageTokenizer from './blockImageTokenizer';

export default tokenizers;

function tokenizers() {
  const { Parser } = this;

  // Add an inline tokenizer
  Parser.prototype.inlineTokenizers.link = linkTokenizer;

  Parser.prototype.blockTokenizers.image = imageTokenizer;
  const methods = Parser.prototype.blockMethods;
  methods.splice(methods.indexOf('paragraph'), 0, 'image');
}
