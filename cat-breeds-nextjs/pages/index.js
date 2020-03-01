import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CatIcon from '../src/img/CatIcon';
import SearchIcon from '../src/img/SearchIcon';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origins: [],
      search: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOriginFilterClick = this.handleOriginFilterClick.bind(this);
  }

  getOriginsArray(array) {
    let initialOrigins = [];
    array.map(item => {
      if (!initialOrigins.includes(item.origin)) {
        initialOrigins = [...initialOrigins, item.origin];
      }
    });
    initialOrigins.sort();
    return initialOrigins;
  }

  async componentDidMount() {
    try {
      const initialOrigins = this.getOriginsArray(
        this.props.cats.data.catBreeds
      );

      this.setState({ origins: initialOrigins });
    } catch (e) {
      console.log(e);
    }
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleOriginFilterClick(origin) {
    const currentState = this.state.origins;

    if (currentState.includes(origin)) {
      const removeThis = currentState.indexOf(origin);
      if (removeThis > -1) {
        currentState.splice(removeThis, 1);
        this.setState({ origins: currentState });
      }
    } else {
      this.setState({ origins: [...currentState, origin] });
    }
  }

  render() {
    const catBreeds = this.props.cats.data.catBreeds;

    const allOrigins = this.getOriginsArray(catBreeds);

    let filterBreedsByName = catBreeds.filter(
      breed =>
        breed.name.toLowerCase().includes(this.state.search.toLowerCase()) &&
        this.state.origins.includes(breed.origin)
    );

    const createCatBreedList = array =>
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

    const createOriginFilterList = array =>
      array.map((item, index) => {
        return (
          <button
            onClick={() => this.handleOriginFilterClick(item)}
            className={
              this.state.origins.includes(item)
                ? 'breedlist__origins__button active'
                : 'breedlist__origins__button'
            }
            key={index}
          >
            {item}
          </button>
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
            <input
              autoComplete='off'
              placeholder='Search for cat breeds'
              id='search'
              onChange={this.handleChange}
            ></input>
            <label htmlFor='search'>Search for cat breeds</label>
            <SearchIcon />
          </div>
          <div className='breedlist__origins'>
            <p>Filter breeds by origin country</p>
            <div className='breedlist__origins__list'>
              {createOriginFilterList(allOrigins)}
            </div>
          </div>

          <ul className='breedlist'>
            {createCatBreedList(filterBreedsByName)}
          </ul>
        </section>
      </>
    );
  }
}

export default Home;
