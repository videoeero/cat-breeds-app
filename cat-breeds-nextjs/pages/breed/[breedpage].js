import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import BreedTextItem from '../../src/components/BreedTextItem';
import BreedStatsItem from '../../src/components/BreedStatsItem';
import Head from 'next/head';

import {
  CatFighting,
  CatLitter,
  BackIcon
} from '../../src/components/SvgIcons';

/**
 * Renders a page for a specific breed.
 * It gets it content from the cat API using the /api/v1/breed/:slug route.
 * The slug is parsed from the query.
 */

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
    slug,
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
    <>
      <Head>
        <title>{name} &ndash; Cat Knowledge</title>
        <meta
          property='og:url'
          content={`https://catknowledge.now.sh/breed/${slug}`}
        />
        <meta
          property='og:description'
          content='Your definite database for different cat breeds.'
        />
        <meta
          name='description'
          content='Your definite database for different cat breeds.'
        />
      </Head>
      <section className='section__breedlist'>
        <Link href='/'>
          <a className='button__back'>
            <BackIcon
              title={'Go back'}
              desc={'Click to go back to home page'}
            />
            Back
          </a>
        </Link>
        <div className='breed'>
          <h2 className='heading__h2'>{name}</h2>
          <div className='fadeIn'>
            <div className='breed__subheading'>
              <h3 className='heading__h3'>Basic info</h3>
              <CatLitter
                color={'red'}
                title={'Cat in a litter box'}
                desc={
                  'A cat sitting in a litter box, looking furious as hell. Still quite adorable.'
                }
              />
            </div>

            <BreedTextItem title={'Origin'} content={origin} />
            <BreedTextItem title={'Temperament'} content={temperament} />
            <BreedTextItem title={'Description'} content={description} />
            <BreedTextItem
              title={'Additional info'}
              isLink={true}
              content={more_info_url}
            />
          </div>
          <div
            className='fadeIn'
            style={{
              animationDelay: '0.5s'
            }}
          >
            <div className='breed__subheading'>
              <h3 className='heading__h3'>Ability levels</h3>
              <CatFighting
                color={'red'}
                title={'Cat fighting'}
                desc={"A cat swiping with it's claws fiercely."}
              />
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
        </div>
      </section>
    </>
  );
}
