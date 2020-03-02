export default function getBreedData(array, target) {
  array.find(breed => {
    return breed.slug == target;
  });
}
