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

export default function SettingsTab() {
  const [value, setValue] = useState('');
  const { keywords, setKeywords, getRandomPhoto } = useUnsplash();
  const classes = useStyles();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === '') {
      console.log('Keyword is not input');
      return false;
    }

    setKeywords([...keywords]);
    keywords.push(value);
    setKeywords(keywords);
    localStorage.setItem('keywords', JSON.stringify(keywords));
    getRandomPhoto(keywords);
    setValue('');
  };

  const handleDelete = (e) => {
    console.log('You clicked the delete icon.');
    // keywords.filter((keyword, index) => index !== indexToDelete);
    // setKeywords(keywords);
  };

  return (
    <Box p={3}>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography component="label" htmlFor="setKeyword">
          Set Keyword
        </Typography>
        <TextField
          id="setKeyword"
          variant="outlined"
          size="small"
          value={value}
          onChange={handleChange}
        />
        <IconButton type="submit" aria-label="Search" color="primary">
          <IoSearch />
        </IconButton>
      </form>
      {keywords.length > 0 &&
        keywords.map((keyword, index) => (
          <Chip
            key={index}
            size="small"
            label={keyword}
            onDelete={handleDelete}
          />
        ))}
    </Box>
  );
}
