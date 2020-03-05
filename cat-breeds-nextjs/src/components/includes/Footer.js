import React, { Component } from 'react';
import SvgGradient from '../SvgGradient';

// Render a Footer component

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <p className='footer__text'>&copy; 2020 People's Front of Catto</p>
        <SvgGradient color={'red'} />
      </footer>
    );
  }
}

export default Footer;
