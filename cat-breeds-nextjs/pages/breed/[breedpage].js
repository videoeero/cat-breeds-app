import React from 'react';
import { useRouter } from 'next/router';

export default function BreedPage({ cats }) {
  const router = useRouter();
  const catBreeds = cats.data.catBreeds;

  const breed = catBreeds.find(breed => {
    return breed.slug === router.query.breedpage;
  });

  const {
    name,
    temperament,
    origin,
    description,
    adaptability,
    affection_level,
    energy_level,
    grooming,
    intelligence,
    social__neds,
    stranger_friendly,
    more_info_url
  } = breed;

  // console.log(router.query);
  // console.log(cats);
  console.log(breed);
  return <h1>{name}</h1>;
}
