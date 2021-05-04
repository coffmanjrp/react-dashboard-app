import { Clock, Wallpaper } from './components';
import { ClockState } from './context/clock/';
import { UnsplashProvider } from './context/useUnsplash';

function App() {
  return (
    <UnsplashProvider>
      <ClockState>
        <Wallpaper>
          <Clock />
        </Wallpaper>
      </ClockState>
    </UnsplashProvider>
  );
}

export default App;
