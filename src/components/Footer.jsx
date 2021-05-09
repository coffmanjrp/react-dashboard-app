import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { motion } from 'framer-motion';
import { AuthorInfo, DownloadButton, ToggleMenuButton, ShareButton } from '.';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    width: '100%',
    height: '100%',
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
    },
  },
};

export default function Footer() {
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
        <ToggleMenuButton />
      </Box>
    </motion.footer>
  );
}
