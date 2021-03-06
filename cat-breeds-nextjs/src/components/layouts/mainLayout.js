import React, { Component } from 'react';
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import Head from 'next/head';

// The basic setup for each page rendered

class MainLayout extends Component {
  render() {
    return (
      <>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes'
          />
          <meta name='keywords' content='cats,breeds,knowledge,science' />
          <meta property='og:title' content='Cat Knowledge' />
          <meta property='og:locale' content='en_EN' />
          <meta property='og:type' content='website' />
          <meta
            property='og:image'
            content={`https://catknowledge.now.sh/images/catknowledge.jpg`}
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/images/icons/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/images/icons/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/images/icons/favicon-16x16.png'
          />
          <link rel='manifest' href='/manifest.json' />
          <link
            rel='mask-icon'
            href='/images/icons/safari-pinned-tab.svg'
            color='#5bbad5'
          />
          <link rel='shortcut icon' href='/images/icons/favicon.ico' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta
            name='msapplication-config'
            content='/icons/browserconfig.xml'
          />
          <meta name='theme-color' content='#ffffff'></meta>
        </Head>
        <div className='mainLayout_container'>
          <Header />
          {this.props.children}
          <Footer />
        </div>
      </>
    );
  }
}

export default MainLayout;
