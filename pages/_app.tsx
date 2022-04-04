import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import '../styles/globals.css';
import CustomNavbar from '../components/layouts/navbar/navbar';



 


export default function App(props) {
  const { Component, pageProps } = props;
  
  return (
    <>
      <Head>
        <title>Kreston CSM</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <CustomNavbar>
          <Component {...pageProps} />
        </CustomNavbar>

      </MantineProvider>
    </>
  );
}
