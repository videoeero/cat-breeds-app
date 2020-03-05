import React from 'react';

/**
 * Renders a helper component to define gradients to SVG icon images. In this project added to footer to be accessibile on all pages.
 * @param {String} color for defining the gradients color. The colors are defined in _icon.scss style file
 */

export function SvgGradient({ color }) {
  return (
    <svg className='svgGradient' aria-hidden='true' focusable='false'>
      <linearGradient id={`icon-gradient-${color}`} x2='1' y2='0'>
        <stop offset='0%' stopColor='var(--color-1)' />
        <stop offset='100%' stopColor='var(--color-2)' />
      </linearGradient>
    </svg>
  );
}

export default SvgGradient;
