import React from 'react';

/**
 * Renders a component of a single origin filter button for the front page
 */

export default function OriginFilterButton({
  handleOriginFilterClick,
  origins,
  filterDefault,
  item
}) {
  return (
    <button
      onClick={() => handleOriginFilterClick(item)}
      className={
        origins.includes(item) && filterDefault == false
          ? 'button__filter active'
          : 'button__filter'
      }
    >
      {item}
    </button>
  );
}
