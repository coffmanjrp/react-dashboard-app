import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Chip, TextField, Box } from '@material-ui/core';
import { FaSearch } from 'react-icons/fa';
import { useUnsplash } from 'context/useUnsplash';
import { setObjectToLocalStorage } from 'utils/localStorage';

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
  '.MuiFormHelperText-contained': {
    color: 'red',
  },
}));

export default function KeywordsTextField() {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const { keywords, setKeywords } = useUnsplash();
  const classes = useStyles();

  useEffect(() => {
    const newKeyword = keywords?.map((keyword) => keyword.replace(/ /g, '-'));

    setObjectToLocalStorage('settings', 'keywords', newKeyword);

    // eslint-disable-next-line
  }, [keywords]);

  const handleChange = (e) => {
    setError(false);
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const exists = keywords?.find((keyword) => keyword === value);

    if (exists) {
      setError(true);
      setErrorMessage(
        'This keyword already exists. Please enter another keyword.'
      );
      return false;
    }

    if (value === '') {
      setError(true);
      setErrorMessage('The keyword is not entered. Please enter a keyword.');
      return false;
    }

    setKeywords([...keywords, value]);
    setValue('');
  };

  const handleDelete = (index) => {
    setKeywords((keywords) =>
      keywords.filter((keyword) => keywords.indexOf(keyword) !== index)
    );
  };

  return (
    <Box className={classes.root}>
      <Box component="form" className={classes.input} onSubmit={handleSubmit}>
        <TextField
          type="search"
          id="setKeyword"
          className={classes.textField}
          variant="outlined"
          size="small"
          autoComplete="off"
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
          <FaSearch />
        </IconButton>
      </Box>
      <Box>
        {keywords?.length > 0 &&
          keywords.map((keyword, index) => (
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
