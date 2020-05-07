export default function(string) {
  return `/${string
    .trim()
    .replace(/[^a-zA-z0-9 ]/g, '')
    .replace(/[ ]/g, '-')
    .toLowerCase()}`;
}
