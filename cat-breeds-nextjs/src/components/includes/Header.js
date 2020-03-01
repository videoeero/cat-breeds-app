import React, { Component } from 'react';
import NerdCat from '../../img/NerdCat';
import NerdCatAlt from '../../img/NerdCatAlt';

class Header extends Component {
  render() {
    return (
      <>
        <header className='header'>
          <div className='header__img'>
            <NerdCatAlt />
          </div>
          <div className='header__text'>
            <h1 className='heading__h1'>Cat Knowledge</h1>
            <p className='header__tagline'>
              You want to be prepared for their world domination
            </p>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
