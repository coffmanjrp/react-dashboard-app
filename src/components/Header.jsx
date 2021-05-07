import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h3>Header</h3>
    </div>
  );
}
