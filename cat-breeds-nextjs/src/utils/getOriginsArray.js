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
