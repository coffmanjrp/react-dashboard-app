import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
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
import { Annotation } from '.';
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

export default function DownloadCard() {
  const classes = useStyles();
  const {
    data: { id, name, thumbnail, unsplashLink, profileLink },
  } = useUnsplash();
  const { isDownloaded, setIsDownloaded } = useSettings();

  const creditShareLink = `${unsplashLink}?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink`;
  const thankyouLink = `Photo by <a href="${profileLink}?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">${name}</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  `;

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const SayThanksContent = () => {
    return (
      <>
        <Typography component="h5" variant="h5">
          Say thanks 🙌
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Give a shoutout to{' '}
          <Link
            href={profileLink}
            rel="noreferrer"
            underline="always"
            color="textPrimary"
            target="_blank"
          >
            {name}
          </Link>{' '}
          on social or copy the text below to attribute.
        </Typography>
        <div className={classes.btnGroup}>
          <Annotation content="Copy URL to clipboard" placement="top">
            <IconButton
              size="small"
              onClick={() => handleCopyToClipboard(creditShareLink)}
            >
              <FaLink />
            </IconButton>
          </Annotation>
          <IconButton
            href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Funsplash.com%2Fphotos%2F${id}%3Futm_source%3Dfacebook%26utm_medium%3Dreferral%26utm_content%3DcreditShareLink`}
            title="Share on Facebook"
            target="_blank"
            size="small"
          >
            <FaFacebook />
          </IconButton>
          <IconButton
            href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Funsplash.com%2Fphotos%2F${id}%3Futm_source%3Dtwitter%26utm_medium%3Dreferral%26utm_content%3DcreditShareLink&text=Thanks%20to%20${name}%20for%20making%20this%20photo%20available%20freely%20on%20%40unsplash%20%F0%9F%8E%81`}
            title="Share on Twitter"
            target="_blank"
            size="small"
          >
            <FaTwitter />
          </IconButton>
          <IconButton
            href={`https://pinterest.com/pin/create/button/?url=https%3A%2F%2Funsplash.com%2Fphotos%2F${id}%3Futm_source%3Dpinterest%26utm_medium%3Dreferral%26utm_content%3DcreditShareLink&description=Thanks%20to%20%40plhnk%20for%20making%20this%20photo%20available%20freely%20on%20%40unsplash%20%F0%9F%8E%81`}
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
        </div>
      </>
    );
  };

  return (
    <>
      <AnimatePresence>
        {isDownloaded && (
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
                <SayThanksContent />
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

                  <Annotation content="Copy to clipboard" placement="top">
                    <IconButton
                      size="small"
                      className={classes.authorIntro}
                      onClick={() => handleCopyToClipboard(thankyouLink)}
                    >
                      <AiOutlineCopy />
                    </IconButton>
                  </Annotation>
                </Paper>
              </CardContent>
              <IconButton
                className={classes.closeBtn}
                size="small"
                disableRipple={true}
                disableFocusRipple={true}
                edge={false}
                onClick={() => setIsDownloaded(false)}
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
