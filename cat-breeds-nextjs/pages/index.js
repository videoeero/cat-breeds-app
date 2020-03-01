import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const catBreeds = this.props.cats.data.catBreeds;

    const catBreedList = array =>
      array.map(breed => {
        const { name, origin, temperament, slug, id } = breed;

        return (
          <li key={id} className='breedlist__item'>
            <h3 className='breedlist__item__heading'>{name}</h3>
            <p className='breedlist__item__origin'>{origin}</p>
            <p className='breedlist__item__temperament'>{temperament}</p>

            <Link href={`/breed/[breedpage]`} as={`/breed/${slug}`}>
              <a className='breedlist__item__link'>More info</a>
            </Link>
          </li>
        );
      });

    return (
      <>
        <Head>
          <meta property='og:url' content='https://catbreeds.now.sh' />
          <meta property='og:description' content='Cats cats more cats!' />
          <meta name='description' content='Cats cats more cats!' />
        </Head>
        <section>
          <h1>Hello, this is frontpage</h1>
          <ul className='breedlist'>{catBreedList(catBreeds)}</ul>
        </section>
      </>
    );
  }
}

export default Home;
