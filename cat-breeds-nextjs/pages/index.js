import React, { Component } from 'react';
import Head from 'next/head';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Head>
          <meta property='og:url' content='https://catbreeds.now.sh' />
          <meta property='og:description' content='Cats cats more cats!' />
          <meta name='description' content='Cats cats more cats!' />
        </Head>
        <section>
          <h1>Hello, this is frontpage</h1>
        </section>
      </>
    );
  }
}

export default Home;
