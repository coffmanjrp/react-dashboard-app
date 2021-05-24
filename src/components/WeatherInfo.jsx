import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion, AnimatePresence } from 'framer-motion';
import weatherInfoData from 'utils/weatherInfoData';

const useStyles = makeStyles({
  info: {
    margin: 0,
    fontSize: '0.8rem',
  },
});

const infoVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } },
};

export default function WeatherInfo({ weather, isFahrenheit }) {
  const [info, setInfo] = useState(0);
  const information = weatherInfoData(weather, isFahrenheit);
  const infoIndex = Math.abs(info) % information.length;
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => setInfo((info) => info + 1), 20000);

    // eslint-disable-next-line
  }, [info]);

  return (
    <>
      {weather && (
        <AnimatePresence initial={false}>
          <motion.p
            variants={infoVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={classes.info}
          >
            {information[infoIndex]}
          </motion.p>
        </AnimatePresence>
      )}
    </>
  );
}
