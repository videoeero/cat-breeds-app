import App from 'next/app';
import React from 'react';
import MainLayout from '../src/components/layouts/mainLayout';
import fetch from 'isomorphic-unfetch';
import '../src/styles/main.scss';

class CatBreeds extends App {
  static async getInitialProps(ctx) {
    const res = await fetch(process.env.DB_URL);
    const json = await res.json();
    return { cats: json };
  }

  render() {
    const { Component, pageProps, cats } = this.props;

    return (
      <MainLayout>
        <Component {...pageProps} cats={cats} />
      </MainLayout>
    );
  }
}

export default CatBreeds;
