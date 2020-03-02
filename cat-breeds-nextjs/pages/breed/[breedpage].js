import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PawIcon from '../../src/img/PawIcon';
import CatFighting from '../../src/img/CatFighting';
import CatLitter from '../../src/img/CatLitter';
import BackIcon from '../../src/img/BackIcon';

export default function BreedPage({ breedpageData }) {
  // const router = useRouter();
  // const catBreeds = cats.data.catBreeds;

  // const breed = catBreeds.find(breed => {
  //   return breed.slug === router.query.breedpage;
  // });

  function showStatPaws(name, paws) {
    let pawSvgs = [];

    for (let i = 0; i < paws; i++) {
      pawSvgs.push(<PawIcon key={`${name}Paw_${i}`} />);
    }
    return pawSvgs;
  }

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
  } = breedpageData;

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
        <p className='breed__text'>
          <strong>Origin:&nbsp;</strong>
          {origin}
        </p>
        <p className='breed__text'>
          <strong>Temperament:&nbsp;</strong>
          {temperament}
        </p>
        <p className='breed__text'>
          <strong>Description:&nbsp;</strong>
          {description}
        </p>
        <p className='breed__text'>
          <strong>Additional info:&nbsp;</strong>

          <a
            className='breed__text__link'
            href={more_info_url}
            target='__black'
            rel='noopener'
          >
            Wikipedia &rarr;
          </a>
        </p>
        <div className='breed__subheading'>
          <h3 className='heading__h3'>Ability levels</h3>
          <CatFighting />
        </div>
        <div className='breed__stats__wrapper'>
          <div className='breed__stats'>
            <p className='breed__stats__text'>
              <strong>Adaptability:</strong>
            </p>
            <div className='breed__stats__paws'>
              {showStatPaws('adaptability', adaptability)}
            </div>
          </div>

          <div className='breed__stats'>
            <p className='breed__stats__text'>
              <strong>Affection:</strong>
            </p>
            <div className='breed__stats__paws'>
              {showStatPaws('affectionLevel', affection_level)}
            </div>
          </div>
          <div className='breed__stats'>
            <p className='breed__stats__text'>
              <strong>Energy:</strong>
            </p>
            <div className='breed__stats__paws'>
              {showStatPaws('energyLevel', energy_level)}
            </div>
          </div>
          <div className='breed__stats'>
            <p className='breed__stats__text'>
              <strong>Grooming:</strong>
            </p>
            <div className='breed__stats__paws'>
              {showStatPaws('grooming', grooming)}
            </div>
          </div>
          <div className='breed__stats'>
            <p className='breed__stats__text'>
              <strong>Intelligence:</strong>
            </p>
            <div className='breed__stats__paws'>
              {showStatPaws('intelligence', intelligence)}
            </div>
          </div>
          <div className='breed__stats'>
            <p className='breed__stats__text'>
              <strong>Social Needs:</strong>
            </p>
            <div className='breed__stats__paws'>
              {showStatPaws('socialNeeds', social_needs)}
            </div>
          </div>
          <div className='breed__stats'>
            <p className='breed__stats__text'>
              <strong>Stranger Friendliness:</strong>
            </p>
            <div className='breed__stats__paws'>
              {showStatPaws('strangerFriendly', stranger_friendly)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
