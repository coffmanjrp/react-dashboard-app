import { Clock, Wallpaper } from 'components';
import { ContextProvider } from 'context/Context';

function App() {
  return (
    <ContextProvider>
      <Wallpaper>
        <Clock />
      </Wallpaper>
    </ContextProvider>
  );
}

export default App;
