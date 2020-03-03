import React from 'react';
import Link from 'next/link';
import CatIcon from '../img/CatIcon';

export default function CatBreedListItem({ breed, index }) {
  const { slug, name, origin, temperament } = breed;

  return (
    <li
      className='breedlist__item fadeIn'
      style={{
        animationDelay: `${(0.3 * (1 - Math.pow(0.85, index))) / (1 - 0.85)}s`
      }}
    >
      <Link href={`/breed/[breedpage]`} as={`/breed/${slug}`}>
        <a className='breedlist__item__heading'>
          <CatIcon />
          <h3 className='breedlist__item__heading__h3'>{name}</h3>
        </a>
      </Link>

      <div className='breedlist__item__info'>
        <p className='breedlist__item__origin'>
          <strong>Origin:</strong>&nbsp;{origin}
        </p>
        <p className='breedlist__item__temperament'>
          <strong>Temperament:</strong>
          &nbsp;{temperament}
        </p>

        <Link href={`/breed/[breedpage]`} as={`/breed/${slug}`}>
          <a className='breedlist__item__link'>More info &rarr;</a>
        </Link>
      </div>
    </li>
  );
}
