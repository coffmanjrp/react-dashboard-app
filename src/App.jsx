import React from 'react';
import { Clock, Footer, Header, Layout, ShareCard } from 'components';
import { ContextProvider } from 'context/Context';

function App() {
  return (
    <ContextProvider>
      <Layout>
        <Header />
        <Clock />
        <Footer />
        <ShareCard />
      </Layout>
    </ContextProvider>
  );
}

export default App;
