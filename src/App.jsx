import React, { useMemo, useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Clock, Footer, Header, Layout, ShareCard } from 'components';
import { ContextProvider } from 'context/Context';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = useMemo(
    () =>
      createMuiTheme({
        overrides: {
          MuiCssBaseline: {
            '@global': {
              body: {
                fontFamily: '"Roboto", sans-serif',
                overflow: 'hidden',
              },
            },
          },
        },
        palette: {
          type: isDarkMode ? 'dark' : 'light',
        },
      }),
    [isDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContextProvider>
        <Layout>
          <Header />
          <Clock />
          <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <ShareCard />
        </Layout>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
