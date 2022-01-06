import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../src/theme/theme';
import { global } from '../src/sass/global.scss';
import NavHeader from '../src/components/navigation/NavHeader';
import NavConfig from '../src/components/navigation/NavConfig';
import NavUser from '../src/components/navigation/NavUser';

import '../lang';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} className={global}>
      <div>
        <NavHeader />
        <Component {...pageProps} />
        <NavConfig />
        <NavUser />
      </div>
    </ThemeProvider>
  );
}
