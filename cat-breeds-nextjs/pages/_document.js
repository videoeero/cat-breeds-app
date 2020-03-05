import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Custom document file to access the Html tag's lang-attribute
 */

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
