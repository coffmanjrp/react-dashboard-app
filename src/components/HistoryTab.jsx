import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Masonry from 'react-masonry-css';
import { useUnsplash } from 'context/useUnsplash';
import { grey } from '@material-ui/core/colors';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  masonryGrid: {
    display: 'flex',
    marginLeft: '-5px' /* gutter size offset */,
    width: 'auto',
  },
  masonryGridColumn: {
    paddingLeft: '5px' /* gutter size */,
    backgroundClip: 'padding-box',
    '> div': {
      /* change div to reference your elements you put in <Masonry> */
      background: grey[200],
      marginBottom: '5px',
    },
  },
}));

export default function HistoryTab() {
  const [history, setHistory] = useState([]);
  const {
    data: { id, name, thumbnail },
  } = useUnsplash();
  const classes = useStyles();
  const breakpoints = {
    default: 7,
    // 1100: 3,
    // 700: 2,
    // 500: 1,
  };
  const store = localStorage.getItem('history');

  useEffect(() => {
    if (id) {
      setHistory([{ id, img: thumbnail, title: name }]);
    }
    localStorage.setItem('history', history);
  }, []);

  console.log(JSON.stringify(store));

  return (
    <Box p={3}>
      <Masonry
        breakpointCols={breakpoints}
        className={classes.masonryGrid}
        columnClassName={classes.masonryGridColumn}
      >
        {history.map((tile) => (
          <div key={tile.id}>
            <img src={tile.img} alt={tile.title} />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}
