import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { motion } from 'framer-motion';
import {
  AuthorInfo,
  DownloadButton,
  ToggleMenuButton,
  ShareButton,
} from 'components';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    width: '100%',
    height: '100%',
    color: theme.palette.text.display,
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px',
    },
  },
}));

const footerVariants = {
  initial: {
    opacity: 0,
    y: '10px',
  },
  animate: {
    opacity: 1,
    y: '0',
    transition: {
      duration: 0.8,
      delay: 2.2,
    },
  },
};

export default function Footer({ isDarkMode, setIsDarkMode }) {
  const classes = useStyles();

  return (
    <motion.footer
      className={classes.container}
      variants={footerVariants}
      initial="initial"
      animate="animate"
    >
      <AuthorInfo />
      <Box display="flex">
        <ShareButton />
        <DownloadButton />
        <ToggleMenuButton
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
      </Box>
    </motion.footer>
  );
}
