import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Paper,
} from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { motion, AnimatePresence } from 'framer-motion';
import {
  // FaCheck,
  FaLink,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaEnvelope,
} from 'react-icons/fa';
import { MdClear } from 'react-icons/md';
import { AiOutlineCopy } from 'react-icons/ai';
import { BalloonTip } from '.';
import { useSettings } from 'context/useSettings';
import { useUnsplash } from 'context/useUnsplash';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    left: '50%',
    bottom: '-100%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
  },
  card: {
    position: 'relative',
    display: 'flex',
    maxWidth: '610px',
    textAlign: 'left',
  },
  cover: {
    minWidth: 151,
  },
  btnGroup: {
    display: 'flex',
    gap: 10,
    margin: '10px 0',
  },
  attribute: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1),
    backgroundColor: grey[300],
  },
  authorIntro: {
    color: grey[600],
  },
  closeBtn: {
    position: 'absolute',
    top: '5px',
    right: '5px',
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
    data: { id, name, thumbnail, unsplashLink, profileLink },
  } = useUnsplash();
  const { isShared, setIsShared } = useSettings();

  const creditShareLink = `${unsplashLink}?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink`;
  const thankyouLink = `Photo by <a href="${profileLink}?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">${name}</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  `;

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const ShareContent = () => {
    return (
      <>
        <Typography component="h5" variant="h5">
          Share This Photo 🎁
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Share this photo on social or copy the text below to attribute.
        </Typography>
        <Box className={classes.btnGroup}>
          <BalloonTip content="Copy URL to clipboard" placement="top">
            <IconButton
              size="small"
              onClick={() => handleCopyToClipboard(creditShareLink)}
            >
              <FaLink />
            </IconButton>
          </BalloonTip>
          <IconButton
            href={`https://facebook.com/sharer/sharer.php?u=https://unsplash.com/photos/${id}`}
            title="Share on Facebook"
            target="_blank"
            size="small"
          >
            <FaFacebook />
          </IconButton>
          <IconButton
            href={`https://twitter.com/intent/tweet/?text=Check%20out%20this%20%40unsplash%20photo%20by%20${name}%3A&url=https://unsplash.com/photos/${id}`}
            title="Share on Twitter"
            target="_blank"
            size="small"
          >
            <FaTwitter />
          </IconButton>
          <IconButton
            href={`https://pinterest.com/pin/create/button/?url=https%3A%2F%2Funsplash.com%2Fphotos%2F${id}%3Futm_source%3Dpinterest%26utm_medium%3Dreferral%26utm_content%3DcreditShareLink`}
            title="Share on Pinterest"
            target="_blank"
            size="small"
          >
            <FaPinterest />
          </IconButton>
          <IconButton
            href={`mailto:?body=https%3A%2F%2Funsplash.com%2Fphotos%2F${id}%3Futm_source%3Demail%26utm_medium%3Dreferral%26utm_content%3DcreditShareLink`}
            title="Share on Email"
            size="small"
          >
            <FaEnvelope />
          </IconButton>
        </Box>
      </>
    );
  };

  return (
    <>
      <AnimatePresence>
        {isShared && (
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
              <CardContent>
                <ShareContent />
                <Paper
                  variant="outlined"
                  elevation={0}
                  className={classes.attribute}
                >
                  <Typography variant="caption" className={classes.authorIntro}>
                    Photo by{' '}
                    <Link
                      href={profileLink}
                      target="_blank"
                      underline="always"
                      className={classes.authorIntro}
                    >
                      {name}
                    </Link>{' '}
                    on{' '}
                    <Link
                      href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                      target="_blank"
                      underline="always"
                      className={classes.authorIntro}
                    >
                      Unsplash
                    </Link>
                  </Typography>

                  <BalloonTip content="Copy to clipboard" placement="top">
                    <IconButton
                      size="small"
                      className={classes.authorIntro}
                      onClick={() => handleCopyToClipboard(thankyouLink)}
                    >
                      <AiOutlineCopy />
                    </IconButton>
                  </BalloonTip>
                </Paper>
              </CardContent>
              <IconButton
                className={classes.closeBtn}
                size="small"
                disableRipple={true}
                disableFocusRipple={true}
                edge={false}
                onClick={() => setIsShared(false)}
              >
                <MdClear />
              </IconButton>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
