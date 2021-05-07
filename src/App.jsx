import { Clock, Footer, Header, Wallpaper } from 'components';
import { ContextProvider } from 'context/Context';

function App() {
  return (
    <ContextProvider>
      <Wallpaper>
        <Header />
        <Clock />
        <Footer />
      </Wallpaper>
    </ContextProvider>
  );
}

export default App;
