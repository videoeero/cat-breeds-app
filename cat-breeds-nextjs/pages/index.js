import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import getOriginsArray from '../src/utils/getOriginsArray';

import CatBreedListItem from '../src/components/CatBreedListItem';
import OriginFilterButton from '../src/components/OriginFilterButton';

import SearchIcon from '../src/img/SearchIcon';
import EarthIcon from '../src/img/EarthIcon';
import RemoveIcon from '../src/img/RemoveIcon';

class Home extends Component {
  static async getInitialProps(context) {
    const res = await fetch(process.env.DB_URL);
    const json = await res.json();
    const origins = await getOriginsArray(json.data.catBreeds);

    return { cats: json, origins: origins };
  }

  constructor(props) {
    super(props);
    this.state = {
      origins: this.props.origins,
      search: '',
      filterDefault: true,
      isOriginFilterOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleOriginFilterOpen = this.toggleOriginFilterOpen.bind(this);
    this.resetStates = this.resetStates.bind(this);
    this.handleOriginFilterClick = this.handleOriginFilterClick.bind(this);
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }
  toggleOriginFilterOpen() {
    this.setState({ isOriginFilterOpen: !this.state.isOriginFilterOpen });
  }

  resetStates() {
    this.setState({
      origins: this.props.origins,
      search: '',
      filterDefault: true,
      isOriginFilterOpen: false
    });
  }

  handleOriginFilterClick(origin) {
    const currentState = this.state.origins;
    const filterDefault = this.state.filterDefault;
    const allOrigins = this.props.origins;
    if (currentState.length == allOrigins.length && filterDefault) {
      this.setState({ origins: [origin], filterDefault: false });
    } else if (currentState.includes(origin) && currentState.length == 1) {
      this.setState({ origins: this.props.origins, filterDefault: true });
    } else if (currentState.includes(origin)) {
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
    console.clear();
    const { origins, filterDefault, isOriginFilterOpen } = this.state;
    const catBreeds = this.props.cats.data.catBreeds;
    const allOrigins = this.props.origins;

    let filterBreedsByName = catBreeds.filter(
      breed =>
        breed.name.toLowerCase().includes(this.state.search.toLowerCase()) &&
        this.state.origins.includes(breed.origin)
    );

    const createOriginFilterList = array =>
      array.map((item, index) => {
        return (
          <OriginFilterButton
            key={`originButton_${index}`}
            handleOriginFilterClick={this.handleOriginFilterClick}
            item={item}
            filterDefault={filterDefault}
            origins={origins}
          />
        );
      });

    const createCatBreedList = array =>
      array.map((breed, index) => {
        return <CatBreedListItem index={index} key={breed.id} breed={breed} />;
      });

    return (
      <>
        <Head>
          <meta property='og:url' content='https://catbreeds.now.sh' />
          <meta property='og:description' content='Cats cats more cats!' />
          <meta name='description' content='Cats cats more cats!' />
        </Head>
        <section className='section__breedlist'>
          <div className='breedlist__filter'>
            <div className='breedlist__filter__search'>
              <input
                aria-labelledby='search-label'
                autoComplete='off'
                placeholder='Search for cat breeds'
                id='search'
                onChange={this.handleChange}
              ></input>
              <label id='search-label' htmlFor='search'>
                Search for cat breeds
              </label>
              <SearchIcon />
            </div>
            <div className='breedlist__filter__origin'>
              <div
                onClick={() => this.toggleOriginFilterOpen()}
                className='breedlist__filter__origin__item'
              >
                <button
                  className={
                    isOriginFilterOpen
                      ? 'button__filter__main active'
                      : 'button__filter__main'
                  }
                >
                  Filter by origin
                </button>
                <EarthIcon />
              </div>
              <div
                onClick={() => this.resetStates()}
                className='breedlist__filter__origin__item'
              >
                <button className='button__filter__main'>Reset</button>
                <RemoveIcon />
              </div>
            </div>
          </div>

          <div
            className={
              isOriginFilterOpen
                ? 'breedlist__origins active'
                : 'breedlist__origins'
            }
          >
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
