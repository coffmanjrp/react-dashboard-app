import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Chip, TextField, Box } from '@material-ui/core';
import { IoSearch } from 'react-icons/io5';
import { useUnsplash } from 'context/useUnsplash';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '25rem',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  btn: {
    marginTop: '-1.5rem',
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function KeywordsTextField() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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
      setErrorMessage('Input a keyword please.');
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
      <Box
        component="form"
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="setKeyword"
          className={classes.input}
          inputProps={{ 'aria-label': 'set keyword' }}
          variant="outlined"
          size="small"
          error={error}
          helperText={error ? errorMessage : 'Set Keyword'}
          value={value}
          onChange={handleChange}
        />
        <IconButton
          type="submit"
          aria-label="Search"
          color="primary"
          className={classes.btn}
        >
          <IoSearch />
        </IconButton>
      </Box>
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
