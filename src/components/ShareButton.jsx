import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { motion } from 'framer-motion';
import { RiShareForwardBoxLine } from 'react-icons/ri';
import { Annotation } from '.';
import { useUnsplash } from 'context/useUnsplash';

const useStyles = makeStyles({
  container: {
    width: '2.8rem',
    height: '2.8rem',
  },
  button: {
    width: '100%',
    height: '100%',
    fontSize: '1.3rem',
  },
});

const buttonVariants = {
  hover: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.6,
    },
  },
};

export default function DownloadButton() {
  const classes = useStyles();
  const { downloadPhoto } = useUnsplash();

  return (
    <Annotation content="Share Photo" placement="top">
      <motion.div variants={buttonVariants} whileHover="hover">
        <IconButton
          className={classes.button}
          aria-label="Download Photo"
          color="inherit"
          onClick={() => downloadPhoto()}
        >
          <RiShareForwardBoxLine />
        </IconButton>
      </motion.div>
    </Annotation>
  );
}