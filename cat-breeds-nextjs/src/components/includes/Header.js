import React, { Component } from 'react';
import NerdCat from '../../img/NerdCat';

class Header extends Component {
  render() {
    return (
      <>
        <header className='header'>
          <div className='header__img'>
            <NerdCat />
          </div>
          <div className='header__text'>
            <h1 className='heading__h1'>Cat Breeds</h1>
            <p className='header__tagline'>
              Knowledge is power, when cats start their world domination
            </p>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
