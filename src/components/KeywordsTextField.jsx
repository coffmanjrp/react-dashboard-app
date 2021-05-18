import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Chip, TextField, Box } from '@material-ui/core';
import { IoSearch } from 'react-icons/io5';
import { useUnsplash } from 'context/useUnsplash';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    width: '100%',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
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
      setErrorMessage('Keyword is not entered. Please enter a keyword.');
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
  };

  return (
    <Box className={classes.root}>
      <Box
        component="form"
        className={classes.input}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="setKeyword"
          className={classes.textField}
          variant="outlined"
          size="small"
          error={error}
          helperText={error ? errorMessage : 'Please enter a keyword.'}
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
      <Box>
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
      </Box>
    </Box>
  );
}
