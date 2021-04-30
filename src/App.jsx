import { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
import './App.css';

function App() {
  const unsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  });
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    unsplashPhoto();

    // eslint-disable-next-line
  }, []);

  async function unsplashPhoto() {
    const { response } = await unsplash.photos.getRandom({
      query: 'cat',
    });

    setPhotos(response);
  }

  console.log(photos);

  return (
    <div className="App">
      <div>Hello, world!</div>
      <div>
        {photos && (
          <img src={photos.urls.regular} alt={photos.alt_description} />
        )}
      </div>
    </div>
  );
}

export default App;
