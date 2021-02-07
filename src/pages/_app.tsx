import { AppProps } from 'next/app';
import { AppProvider } from '../hooks/appContext';
import { GlobalStyles } from '../styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </AppProvider>
  );
}
