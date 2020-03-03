const BreedTextItem = ({ title, isLink, content }) => {
  return (
    <p className='breed__text'>
      <strong>{title}:&nbsp;</strong>
      {isLink ? (
        <a
          className='breed__text__link'
          href={content}
          target='__black'
          rel='noopener'
        >
          Wikipedia &rarr;
        </a>
      ) : (
        content
      )}
    </p>
  );
};

export default BreedTextItem;
