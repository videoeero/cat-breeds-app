import React from 'react';
import PawIcon from '../img/PawIcon';

/**
 * Componenent to render on the breedpage a given ability name and it's score from 1 to 5 paws.
 * @param {String} name name of ability
 * @param {Integer} numOfPaws number of paws for the ability
 */

const BreedStatsItem = ({ name, numOfPaws }) => {
  return (
    <div className='breed__stats'>
      <p className='breed__stats__text'>
        <strong>{name}:</strong>
      </p>
      <div className='breed__stats__paws'>
        <Paws name={name} numOfPaws={numOfPaws} />
      </div>
    </div>
  );
};

const Paws = ({ name, numOfPaws }) => {
  let pawSvgs = [];

  for (let i = 0; i < numOfPaws; i++) {
    pawSvgs.push(<PawIcon key={`${name.slice(0, 5)}_paw_${i}`} index={i} />);
  }
  return pawSvgs;
};

export default BreedStatsItem;
