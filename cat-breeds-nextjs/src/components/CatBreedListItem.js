import React from 'react';
import Link from 'next/link';
import { CatIcon } from '../components/SvgIcons';

/**
 * Renders a component of a single breed list item on the front page
 * @param {Object} breed the breed object where all the info is parsed
 * @param {Integer} index to calculate smoothly some fancy fade in effect.
 */

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
          <CatIcon
            title={'Cat Icon'}
            desc={`Click to see more info about ${name}`}
          />
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
