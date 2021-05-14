import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  IconButton,
  Chip,
  TextField,
  Typography,
} from '@material-ui/core';
import { IoSearch } from 'react-icons/io5';
import { useUnsplash } from 'context/useUnsplash';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '12rem',
    },
  },
  chipList: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 0,
    padding: theme.spacing(0.5),
    listStyle: 'none',
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function SettingsTab({ setDrawer }) {
  const [query, setQuery] = useState('');
  const { getRandomPhoto } = useUnsplash();
  const classes = useStyles();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const store = localStorage.setItem('queries', JSON.stringify(query));

    getRandomPhoto(localStorage.getItem('queries'));
    setQuery('');
    setDrawer(false);
    return store;
  };

  const handleDelete = (e) => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Box p={3}>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography component="label" htmlFor="setQuery">
          Set Query
        </Typography>
        <TextField
          id="setQuery"
          variant="outlined"
          value={query}
          onChange={handleChange}
        />

        <IconButton type="submit" aria-label="Search" color="primary">
          <IoSearch />
        </IconButton>
      </form>
      <Chip
        size="small"
        label={JSON.parse(localStorage.getItem('queries'))}
        onDelete={handleDelete}
      />
    </Box>
  );
}
