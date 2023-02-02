import '@/styles/globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return(
    <>
    <Head>
      <title>Tetflix - Streaming service</title>
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='format-detection' content='telephone=no' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='author' content='abzedmohammed' />
      <meta name='keywords' content='Tetflix, Streaming, Movies, Series' />
      <meta
        name='description'
        content='Tetflix - Streaming service'
      />
    </Head>
    <Component {...pageProps} />
  </>
  )
  
  
}
