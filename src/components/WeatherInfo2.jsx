import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { motion, AnimatePresence } from 'framer-motion';
import weatherInfoData from 'utils/weatherInfoData';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles({
  root: {
    margin: 0,
    fontSize: '0.8rem',
    cursor: 'pointer',
    textAlign: 'right',
  },
  info: {
    margin: 0,
  },
});

const infoVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } },
};

export default function WeatherInfo2({ weather, isFahrenheit }) {
  const [info, setInfo] = useState(0);
  const information = weatherInfoData(weather, isFahrenheit);
  const infoIndex = Math.abs(info) % information.length;
  const classes = useStyles();

  useEffect(() => {
    document.querySelector('.demo-carousel');
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {weather && (
        <div className={classes.root}>
          <Carousel
            width={200}
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
            showStatus={false}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            centerMode={false}
            dynamicHeight={false}
          >
            {information.map((info, index) => (
              <p key={index} className={classes.info}>
                {info}
              </p>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
}
