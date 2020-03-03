import App from 'next/app';
import React from 'react';
import MainLayout from '../src/components/layouts/mainLayout';
import '../src/styles/main.scss';

class CatBreeds extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    );
  }
}

export default CatBreeds;
