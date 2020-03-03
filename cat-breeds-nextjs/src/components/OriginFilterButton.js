import React from 'react';

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
