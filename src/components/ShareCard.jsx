import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTimes,
  FaLink,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaEnvelope,
} from 'react-icons/fa';
import { useUnsplash } from 'context/useUnsplash';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    left: '50%',
    bottom: 0,
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
  },
  card: {
    position: 'relative',
    display: 'flex',
    maxWidth: '480px',
    textAlign: 'left',
  },
  cover: {
    minWidth: 151,
  },
  closeBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));

const shareVariants = {
  initial: {
    opacity: 0,
    y: '100%',
    x: '-50%',
  },
  animate: {
    opacity: 1,
    y: '-50%',
    x: '-50%',
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: '100%',
    x: '-50%',
    transition: {
      duration: 1,
    },
  },
};

export default function ShareCard() {
  const classes = useStyles();
  const {
    data: { name, thumbnail, profileLink },
    share,
    setShare,
  } = useUnsplash();

  return (
    <>
      <AnimatePresence>
        {share && (
          <motion.div
            className={classes.root}
            variants={shareVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Card className={classes.card}>
              <CardMedia
                className={classes.cover}
                image={thumbnail}
                title="Live from space album cover"
              />
              <div>
                <CardContent>
                  <Typography component="h5" variant="h5">
                    Say thanks 🙌
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Give a shoutout to{' '}
                    <a href={profileLink} rel="noreferrer" target="_blank">
                      {name}
                    </a>{' '}
                    on social or copy the text below to attribute.
                  </Typography>
                  <IconButton size="small">
                    <FaLink />
                  </IconButton>
                  <IconButton size="small">
                    <FaFacebook />
                  </IconButton>
                  <IconButton size="small">
                    <FaTwitter />
                  </IconButton>
                  <IconButton size="small">
                    <FaPinterest />
                  </IconButton>
                  <IconButton size="small">
                    <FaEnvelope />
                  </IconButton>
                </CardContent>
              </div>
              <IconButton
                className={classes.closeBtn}
                size="small"
                disableRipple={true}
                disableFocusRipple={true}
                edge={false}
                onClick={() => setShare(false)}
              >
                <FaTimes />
              </IconButton>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
