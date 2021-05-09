import { Clock, Footer, Header, Layout } from 'components';
import { ContextProvider } from 'context/Context';

function App() {
  return (
    <ContextProvider>
      <Layout>
        <Header />
        <Clock />
        <Footer />
      </Layout>
    </ContextProvider>
  );
}

export default App;
