import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CatIcon from '../src/img/CatIcon';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
      search: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    try {
      this.setState({
        ...this.state,
        ...{
          breeds: this.props.cats.data.catBreeds
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const catBreeds = this.props.cats.data.catBreeds;

    let filterBreedsByName = catBreeds.filter(
      breed =>
        breed.name.toLowerCase().includes(this.state.search.toLowerCase()) //true
    );

    const catBreedList = array =>
      array.map(breed => {
        const { name, origin, temperament, slug, id } = breed;

        return (
          <li key={id} className='breedlist__item'>
            <div className='breedlist__item__heading'>
              <CatIcon />
              <h3 className='breedlist__item__heading__h3'>{name}</h3>
            </div>
            <div className='breedlist__item__info'>
              <p className='breedlist__item__origin'>
                <strong>Origin:</strong>&nbsp;{origin}
              </p>
              <p className='breedlist__item__temperament'>
                <strong>Temperament:</strong>
                &nbsp;{temperament}
              </p>

              <Link href={`/breed/[breedpage]`} as={`/breed/${slug}`}>
                <a className='breedlist__item__link'>More info &rarr;</a>
              </Link>
            </div>
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
        <section className='section__breedlist'>
          <div className='breedlist__search'>
            <label>
              Search for cat breeds
              <input
                id='search'
                placeholder='Search...'
                onChange={this.handleChange}
              ></input>
            </label>
          </div>

          <ul className='breedlist'>{catBreedList(filterBreedsByName)}</ul>
        </section>
      </>
    );
  }
}

export default Home;
