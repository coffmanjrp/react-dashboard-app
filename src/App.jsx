import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import WebFont from 'webfontloader';
import {
  Clock,
  Footer,
  Header,
  Layout,
  MenuModal,
  ShareCard,
} from 'components';
import { getSettings } from 'utils/localStorage';
import muiTheme from 'utils/muiTheme';

function App() {
  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(getSettings?.isDarkMode);
  const theme = muiTheme(isDarkMode);
  const fontConfig = {
    google: {
      families: ['Roboto:300,400,700'],
    },
  };

  useEffect(() => {
    WebFont.load(fontConfig);

    if (getSettings?.isDarkMode === undefined) {
      setIsDarkMode(false);
    }

    // eslint-disable-next-line
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Header />
        <Clock />
        <Footer handleOpen={handleOpen} />
        <ShareCard />
        <MenuModal
          open={open}
          handleClose={handleClose}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
