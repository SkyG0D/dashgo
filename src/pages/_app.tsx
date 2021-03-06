import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider } from 'react-query';

import { SidebarDrawerProvider } from 'contexts/SidebarDrawerContext';
import { makeServer } from 'services/mirage';
import { theme } from 'styles/theme';
import { queryClient } from 'services/queryClient';

makeServer();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Head>
            <title>Next Boilerplate</title>
          </Head>

          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
