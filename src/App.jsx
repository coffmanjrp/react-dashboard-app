import { Clock, Wallpaper } from 'components';
import { ClockState } from 'context/clock/';
import { ContextProvider } from 'context/context';

function App() {
  return (
    <ContextProvider>
      <ClockState>
        <Wallpaper>
          <Clock />
        </Wallpaper>
      </ClockState>
    </ContextProvider>
  );
}

export default App;
