import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Chip, TextField, Typography } from '@material-ui/core';
import { IoSearch } from 'react-icons/io5';
import { useUnsplash } from 'context/useUnsplash';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '12rem',
    },
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function KeywordsTextField() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const { keywords, setKeywords, getRandomPhoto } = useUnsplash();
  const classes = useStyles();

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));

    // eslint-disable-next-line
  }, [keywords]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === '') {
      setError(true);
      return false;
    }

    setKeywords([...keywords]);
    keywords.push(value);
    setKeywords(keywords);
    localStorage.setItem('keywords', JSON.stringify(keywords));
    getRandomPhoto(keywords);
    setValue('');
  };

  const handleDelete = (index) => {
    setKeywords((keywords) =>
      keywords.filter((keyword) => keywords.indexOf(keyword) !== index)
    );
    getRandomPhoto(keywords);
  };

  return (
    <>
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
          error={error}
          helperText={error ? 'Input a keyword please.' : ''}
          value={value}
          onChange={handleChange}
        />
        <IconButton type="submit" aria-label="Search" color="primary">
          <IoSearch />
        </IconButton>
      </form>
      {keywords.length > 0 &&
        keywords?.map((keyword, index) => (
          <Chip
            key={index}
            className={classes.chip}
            size="small"
            label={keyword}
            onDelete={() => handleDelete(index)}
          />
        ))}
    </>
  );
}
