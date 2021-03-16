export default function canIterate(data) {
  return Symbol.iterator in Object(data);
}
