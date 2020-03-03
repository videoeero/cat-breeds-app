import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import BreedTextItem from '../../src/components/BreedTextItem';
import BreedStatsItem from '../../src/components/BreedStatsItem';
import CatFighting from '../../src/img/CatFighting';
import CatLitter from '../../src/img/CatLitter';
import BackIcon from '../../src/img/BackIcon';

BreedPage.getInitialProps = async context => {
  const res = await fetch(
    `${process.env.DB_URL}/breed/${context.query.breedpage}`
  );

  const json = await res.json();

  return { breed: json };
};

export default function BreedPage({ breed }) {
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
    social_needs,
    stranger_friendly,
    more_info_url
  } = breed.data.catBreed;

  return (
    <section className='section__breedlist'>
      <Link href='/'>
        <a className='button__back'>
          <BackIcon /> Back
        </a>
      </Link>
      <div className='breed'>
        <h2 className='heading__h2'>{name}</h2>
        <div className='breed__subheading'>
          <h3 className='heading__h3'>Basic info</h3>
          <CatLitter />
        </div>
        <BreedTextItem title={'Origin'} content={origin} />
        <BreedTextItem title={'Temperament'} content={temperament} />
        <BreedTextItem title={'Description'} content={description} />
        <BreedTextItem
          title={'Additional info'}
          isLink={true}
          content={more_info_url}
        />

        <div className='breed__subheading'>
          <h3 className='heading__h3'>Ability levels</h3>
          <CatFighting />
        </div>
        <div className='breed__stats__wrapper'>
          <BreedStatsItem name={'Adaptability'} numOfPaws={adaptability} />
          <BreedStatsItem name={'Affection'} numOfPaws={affection_level} />
          <BreedStatsItem name={'Energy'} numOfPaws={energy_level} />
          <BreedStatsItem name={'Grooming'} numOfPaws={grooming} />
          <BreedStatsItem name={'Intelligence'} numOfPaws={intelligence} />
          <BreedStatsItem name={'Social Needs'} numOfPaws={social_needs} />
          <BreedStatsItem
            name={'Stranger Friendliness'}
            numOfPaws={stranger_friendly}
          />
        </div>
      </div>
    </section>
  );
}
