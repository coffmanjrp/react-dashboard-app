import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, IconButton, Typography } from '@material-ui/core';
import { MdClear } from 'react-icons/md';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: '95% 5%',
    padding: theme.spacing(0, 3),
    height: '100%',
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));

export default function AboutTab({ handleClose }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box p={2}>
        <Typography variant="h5" component="h2">
          About this app
        </Typography>
        <Typography variant="h6" component="h4">
          Version: 1.0.0
        </Typography>
      </Box>
      <Box component="footer" className={classes.footer}>
        <IconButton onClick={() => handleClose()}>
          <MdClear />
        </IconButton>
      </Box>
    </Box>
  );
}
