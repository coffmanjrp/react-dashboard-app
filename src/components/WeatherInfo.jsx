import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import weatherInfoData from 'utils/weatherInfoData';

const useStyles = makeStyles((theme) => ({
  slider: {
    position: 'relative',
    display: 'flex',
    margin: 0,
    padding: 0,
    width: '150px',
    listStyleType: 'none',
    overflow: 'hidden',
  },
  slide: (props) => ({
    minWidth: '100%',
    margin: 0,
    textAlign: 'right',
    transition: 'all 350ms ease-in-out',
    transform: `translateX(-${props.carousel}%)`,
  }),
  info: {
    margin: 0,
    fontSize: '0.8rem',
    cursor: 'pointer',
  },
}));

export default function WeatherInfo({ weather, isFahrenheit }) {
  const [carousel, setCarousel] = useState(0);
  const information = weatherInfoData(weather, isFahrenheit);
  const classes = useStyles({ carousel });
  const interval = 5000;

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCarousel((carousel) => {
        if (carousel < (information.length - 1) * 100) {
          return carousel + 100;
        } else {
          setCarousel(0);
        }
      });
    }, interval);

    return () => clearInterval(carouselInterval);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {weather && (
        <div>
          <ul className={classes.slider}>
            {information.map((info, index) => (
              <li key={index} className={classes.slide}>
                <p className={classes.info}>{info}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
