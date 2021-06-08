import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
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
