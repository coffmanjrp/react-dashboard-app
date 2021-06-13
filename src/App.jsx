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
  const [displayClock, setDisplayClock] = useState(true);
  const [displaySeconds, setDisplaySeconds] = useState(false);
  const [displayDate, setDisplayDate] = useState(true);
  const [displayAmpm, setDisplayAmpm] = useState(true);
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
        <Clock
          displayClock={displayClock}
          displaySeconds={displaySeconds}
          displayDate={displayDate}
          displayAmpm={displayAmpm}
          setDisplayClock={setDisplayClock}
          setDisplaySeconds={setDisplaySeconds}
          setDisplayDate={setDisplayDate}
          setDisplayAmpm={setDisplayAmpm}
        />
        <Footer handleOpen={handleOpen} />
        <ShareCard />
        <MenuModal
          open={open}
          handleClose={handleClose}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          displayClock={displayClock}
          displaySeconds={displaySeconds}
          displayDate={displayDate}
          displayAmpm={displayAmpm}
          setDisplayClock={setDisplayClock}
          setDisplaySeconds={setDisplaySeconds}
          setDisplayDate={setDisplayDate}
          setDisplayAmpm={setDisplayAmpm}
        />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
