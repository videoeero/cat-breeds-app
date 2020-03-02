import App from 'next/app';
import React from 'react';
import MainLayout from '../src/components/layouts/mainLayout';
import fetch from 'isomorphic-unfetch';
import getOriginsArray from '../src/utils/getOriginsArray';
import '../src/styles/main.scss';

class CatBreeds extends App {
  static async getInitialProps(ctx) {
    const res = await fetch(process.env.DB_URL);
    const json = await res.json();
    const origins = await getOriginsArray(json.data.catBreeds);
    return { cats: json, origins: origins };
  }

  render() {
    const { Component, pageProps, cats, origins } = this.props;

    return (
      <MainLayout>
        <Component {...pageProps} cats={cats} origins={origins} />
      </MainLayout>
    );
  }
}

export default CatBreeds;
