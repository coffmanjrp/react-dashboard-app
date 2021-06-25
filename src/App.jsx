import React, { useEffect, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import WebFont from 'webfontloader';
import { Footer, Header, Layout, Main } from 'components';
import { getSettings } from 'utils/localStorage';
import muiTheme from 'utils/muiTheme';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = muiTheme(isDarkMode);
  const fontConfig = {
    google: {
      families: ['Roboto:300,400,700'],
    },
  };

  useEffect(() => {
    WebFont.load(fontConfig);

    if (getSettings?.isDarkMode === undefined) setIsDarkMode(false);
    else setIsDarkMode(getSettings.isDarkMode);

    // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Header />
        <Main />
        <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
