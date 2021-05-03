import { Clock, Wallpaper } from './components';
import { ClockState } from './context/clock/';

function App() {
  return (
    <ClockState>
      <Wallpaper>
        <Clock />
      </Wallpaper>
    </ClockState>
  );
}

export default App;
