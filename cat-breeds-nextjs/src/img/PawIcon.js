import React from 'react';

export default function PawIcon({ index }) {
  return (
    <svg
      // className='icon__paw fadeInPaw'
      className={index == 0 ? 'icon__paw fadeInNormal' : 'icon__paw fadeInPaw'}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 61.4 57.6'
      style={{
        animationDelay: `${(index + 4) * 0.2}s`
      }}
    >
      <path d='M1.9 18.7c1.3-1.1 2.9-1.7 4.6-1.6 1.8.1 3.6.7 5.1 1.7.7.4 1.3.9 1.8 1.5 1.5 1.6 2.6 3.5 3.3 5.6.7 2.3.7 4.6-.4 6.3-.2.3-.5.6-.8.9-.3.3-.6.5-.9.7-1.8 1.1-4.1.9-6.3.1-2-.8-3.9-2-5.4-3.6-.5-.5-.9-1.1-1.3-1.7C.6 27 .1 25.2.1 23.4c-.1-1.8.5-3.5 1.8-4.7zM17.7.3c1.7-.6 3.5-.3 5 .7 1.6 1.1 2.9 2.5 3.8 4.3.2.4.4.9.6 1.3.9 2.6 1.1 5.3.9 7.9-.3 2.9-1.4 5.6-3.5 6.7l-.6.3-1.2.3c-1.9.1-3.8-1-5.3-2.7-1.4-1.6-2.5-3.5-3.2-5.5-.4-1.1-.7-2.3-.8-3.5-.2-2 .1-4 .9-5.9C14.7 2.4 16 1 17.7.3zM38 1c1.5-1 3.3-1.2 5-.7 1.7.7 3 2 3.6 3.7.7 1.9 1 3.9.9 5.9-.1 1.2-.4 2.4-.8 3.5-.7 2-1.8 3.9-3.2 5.5-1.5 1.7-3.4 2.8-5.3 2.7-.4 0-.8-.1-1.2-.3l-.6-.3c-2.1-1.1-3.2-3.7-3.5-6.7-.3-2.7 0-5.4.9-7.9.2-.5.4-.9.6-1.3.7-1.6 2-3.1 3.6-4.1zM54.9 17.1c3.3-.3 6.2 2.1 6.4 5.4v.8c0 1.8-.6 3.6-1.5 5.2-.4.6-.8 1.2-1.3 1.7-1.5 1.6-3.4 2.8-5.4 3.6-2.2.8-4.5 1-6.3-.1-.3-.2-.6-.4-.9-.7-.3-.3-.5-.6-.8-.9-1.1-1.7-1.1-4-.4-6.3.7-2.1 1.8-4 3.3-5.6.5-.6 1.1-1.1 1.8-1.5 1.5-.9 3.3-1.5 5.1-1.6zM18.3 35.2c2.6-3.5 6.7-5.6 11.1-5.7 4.4.1 8.5 2.2 11.1 5.7 2.9 3.8 4.5 8.5 4.4 13.2 0 7.8-5.6 9.2-12.2 9.2-1.4 0-3-.1-4.5-.1h-.1c-.7 0-1.2-.1-1.7-.1-7.3-.3-12.6-.5-12.6-8.9 0-4.8 1.5-9.5 4.5-13.3z' />
    </svg>
  );
}
