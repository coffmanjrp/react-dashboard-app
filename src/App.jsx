import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import WebFont from 'webfontloader';
import { Clock, Footer, Greeting, Header, Layout, MenuModal } from 'components';
// import { useSettings } from 'context/useSettings';
import { getSettings } from 'utils/localStorage';
import muiTheme from 'utils/muiTheme';

function App() {
  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [displayClock, setDisplayClock] = useState(true);
  // const { displayClock, isDarkMode, setIsDarkMode } = useSettings();
  const theme = muiTheme(isDarkMode);
  const fontConfig = {
    google: {
      families: ['Roboto:300,400,700'],
    },
  };

  useEffect(() => {
    WebFont.load(fontConfig);

    if (getSettings?.displayClock === undefined) setDisplayClock(true);
    else setDisplayClock(getSettings.displayClock);
    if (getSettings?.isDarkMode === undefined) setIsDarkMode(false);
    else setIsDarkMode(getSettings.isDarkMode);

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
        {displayClock ? <Clock /> : <Greeting />}
        <Footer handleOpen={handleOpen} />
        <MenuModal
          open={open}
          handleClose={handleClose}
          displayClock={displayClock}
          setDisplayClock={setDisplayClock}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
