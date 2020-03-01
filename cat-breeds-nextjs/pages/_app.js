import App from 'next/app';
import React from 'react';
// import MainLayout from '../components/layouts/mainLayout';
import MainLayout from '../src/components/layouts/mainLayout';
// import '../styles/main.scss';
import '../src/styles/main.scss';

class WebsiteApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    );
  }
}

export default WebsiteApp;