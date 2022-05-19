import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { theme } from 'styles/theme';
import 'styles/styles.css';
import React from 'react';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default MyApp;
