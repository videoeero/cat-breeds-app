/**
 * Parses an array of objects and returns an array with all origins
 * @param {Object[]} array of objects of cat breeds to parse origins from
 */

export default function getOriginsArray(array) {
  let initialOrigins = [];
  array.map(item => {
    if (!initialOrigins.includes(item.origin)) {
      initialOrigins = [...initialOrigins, item.origin];
    }
  });
  initialOrigins.sort();
  return initialOrigins;
}
