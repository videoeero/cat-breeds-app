import App from 'next/app';
import React from 'react';
import MainLayout from '../src/components/layouts/mainLayout';
import fetch from 'isomorphic-unfetch';
import getOriginsArray from '../src/utils/getOriginsArray';
import getBreedData from '../src/utils/getBreedData';
import '../src/styles/main.scss';

class CatBreeds extends App {
  // static async getInitialProps(context) {
  //   const res = await fetch(process.env.DB_URL);
  //   const json = await res.json();
  //   const origins = await getOriginsArray(json.data.catBreeds);

  //   const breedpageData = await json.data.catBreeds.find(breed => {
  //     return breed.slug == context.ctx.query.breedpage;
  //   });

  //   return { cats: json, origins: origins, breedpageData: breedpageData };
  // }

  render() {
    const { Component, pageProps, cats, origins, breedpageData } = this.props;

    return (
      <MainLayout>
        <Component
          {...pageProps}
          // cats={cats}
          // origins={origins}
          // breedpageData={breedpageData}
        />
      </MainLayout>
    );
  }
}

export default CatBreeds;
