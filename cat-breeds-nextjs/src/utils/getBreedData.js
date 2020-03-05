/**
 * Function to find a specific breed from an array of breed using slug property of cat breed object.
 * @param {Object[]} array of objects of cat breeds to find from
 * @param {String} target which breed should be found and returned
 *
 */

export const getBreedData = (array, target) => {
  array.find(breed => {
    return breed.slug == target;
  });
};
