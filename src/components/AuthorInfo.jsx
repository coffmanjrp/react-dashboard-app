import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import { useUnsplash } from 'context/useUnsplash';

const useStyles = makeStyles((theme) => ({
  root: {},
  link: {
    display: 'flex',
    gap: '0.5rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '35px',
    height: '35px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  username: {
    margin: 0,
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
  },
  location: {
    margin: 0,
    fontSize: '0.8rem',
    fontWeight: 'normal',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default function AuthorInfo() {
  const { authorInfo } = useUnsplash();
  const { name, location, link, image } = authorInfo;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Link
        href={link}
        className={classes.link}
        color="inherit"
        target="_blank"
        rel="noreferrer"
      >
        <Avatar src={image} alt={name} className={classes.avatar} />
        <Box>
          <Typography variant="h3" className={classes.username}>
            {name}
          </Typography>
          <Typography variant="h4" className={classes.location}>
            {location}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}
