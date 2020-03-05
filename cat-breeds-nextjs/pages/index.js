import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import getOriginsArray from '../src/utils/getOriginsArray';

import CatBreedListItem from '../src/components/CatBreedListItem';
import OriginFilterButton from '../src/components/OriginFilterButton';

import { SearchIcon, EarthIcon, RemoveIcon } from '../src/components/SvgIcons';

class Home extends Component {
  // Get initial props from the API

  static async getInitialProps(context) {
    const res = await fetch(process.env.DB_URL);
    const json = await res.json();
    const origins = await getOriginsArray(json.data.catBreeds);

    return { cats: json, origins: origins };
  }

  constructor(props) {
    super(props);
    this.state = {
      // Array of breed origins
      origins: this.props.origins,
      // User input for name search
      search: '',
      // By default user has not clicked any specific origin filter on, so all breeds are shown
      filterDefault: true,
      // By default user has not clicked the filter by origin list on
      isOriginFilterOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleOriginFilterOpen = this.toggleOriginFilterOpen.bind(this);
    this.resetStates = this.resetStates.bind(this);
    this.handleOriginFilterClick = this.handleOriginFilterClick.bind(this);
  }

  /**
   * State handler for seach by name form input
   * @param {String} event input what user types to form
   */
  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  /**
   * State handler for toggling "Filter by Origin" list
   */
  toggleOriginFilterOpen() {
    this.setState({ isOriginFilterOpen: !this.state.isOriginFilterOpen });
  }

  /**
   * Reset all states to initial state, fired at Reset button
   */
  resetStates() {
    this.setState({
      origins: this.props.origins,
      search: '',
      filterDefault: true,
      isOriginFilterOpen: false
    });
  }

  /**
   * State handler for filter by origin buttons
   * @param {String} origin the clicked origin
   */

  handleOriginFilterClick(origin) {
    const currentState = this.state.origins;
    const filterDefault = this.state.filterDefault;
    const allOrigins = this.props.origins;

    // Check if this is the first time user clicks a filter on
    if (currentState.length == allOrigins.length && filterDefault) {
      this.setState({ origins: [origin], filterDefault: false });

      // Check if user has clicked only one origin on and wants to set it also off
    } else if (currentState.includes(origin) && currentState.length == 1) {
      this.setState({ origins: this.props.origins, filterDefault: true });

      // Check if the origin user clicks is already on and removes it from filters
    } else if (currentState.includes(origin)) {
      const removeThis = currentState.indexOf(origin);
      if (removeThis > -1) {
        currentState.splice(removeThis, 1);
        this.setState({ origins: currentState });
      }
      // Else toggles on the origin filter user wants to see
    } else {
      this.setState({ origins: [...currentState, origin] });
    }
  }

  render() {
    const { origins, filterDefault, isOriginFilterOpen } = this.state;
    const catBreeds = this.props.cats.data.catBreeds;
    const allOrigins = this.props.origins;

    // Filters cat breeds which name's include user's search input
    let filterBreedsByName = catBreeds.filter(
      breed =>
        breed.name.toLowerCase().includes(this.state.search.toLowerCase()) &&
        this.state.origins.includes(breed.origin)
    );

    /**
     * Creates buttons for Filter by origin feature
     * @param {String[]} array of breed origins
     */

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

    /**
     * Creates the list of catbreeds on index page
     * @param {Object[]} array of cat breed objects
     */

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
              <SearchIcon title={'Search'} desc={'Search cat breed by name'} />
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
                <EarthIcon
                  title={'Filter breeds by origin'}
                  desc={'Filter breeds by origin'}
                />
              </div>
              <div
                onClick={() => this.resetStates()}
                className='breedlist__filter__origin__item'
              >
                <button className='button__filter__main'>Reset</button>
                <RemoveIcon
                  title={'Reset filters'}
                  desc={'Reset search criteria filters'}
                />
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
