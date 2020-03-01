import React, { Component } from 'react';
import Navigation from '../includes/Navigation';
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import Head from 'next/head';
import { withRouter } from 'next/router';

class MainLayout extends Component {
  render() {
    const { children, router } = this.props;

    return (
      <>
        <Head>
          <title>Cat Breeds App</title>
          <meta name='keywords' content='cats,breeds,knowledge,science' />
          <meta property='og:title' content='Cat Breeds App' />
          <meta property='og:locale' content='en_EN' />
          <meta property='og:type' content='website' />
          {/* <meta
            property='og:image'
            content=''
          /> */}
          <meta property='og:description' content='Cat Breeds App' />
          <meta name='description' content='Cat Breeds App' />
        </Head>
        <div className='mainLayout_container'>
          <Navigation />
          <Header />
          {this.props.children}
          <Footer />
        </div>
      </>
    );
  }
}

export default withRouter(MainLayout);
