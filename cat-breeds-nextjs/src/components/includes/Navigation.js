import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <nav className='nav'>
          <Link href='/'>
            <a>
              Home
              {/* <img className='nav__logo' src='' alt='Home' /> */}
            </a>
          </Link>
          <p className='nav__item'>This is navigation bar</p>
        </nav>
      </>
    );
  }
}

export default withRouter(Navigation);
