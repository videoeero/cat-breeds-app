/**
 * Componenent to render a given info about the breed.
 * @param {String} title title of the info
 * @param {inLink} boolean if true, then content will handled as a hyperlink
 * @param {content} string the info content about given info
 */

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
