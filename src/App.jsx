import { Clock, Wallpaper } from './components';
import { States } from './context';

function App() {
  return (
    <States>
      <Wallpaper>
        <Clock />
      </Wallpaper>
    </States>
  );
}

export default App;
