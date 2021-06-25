import React from 'react';
import { colors, makeStyles, Box, IconButton, Link } from '@material-ui/core';
import Masonry from 'react-masonry-css';
import { AiOutlineClear } from 'react-icons/ai';
import { useUnsplash } from 'context/useUnsplash';
import { BalloonTip, CloseModalButton } from 'components';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: '95% 5%',
    padding: theme.spacing(0, 3),
    height: '100%',
    // overflow: 'hidden',
  },
  container: {
    overflow: 'hidden',
  },
  masonryGrid: {
    display: 'flex',
    marginLeft: '-5px' /* gutter size offset */,
    width: 'auto',
  },
  masonryGridColumn: {
    paddingLeft: '5px' /* gutter size */,
    backgroundClip: 'padding-box',
  },
  item: {
    marginBottom: '10px',
  },
  image: {
    border: `1px solid ${colors.grey[200]}`,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export default function HistoryTab({ handleClose }) {
  const { history, setHistory, getPhotoById } = useUnsplash();
  const classes = useStyles();
  const breakpoints = {
    default: 7,
    1100: 4,
    700: 3,
    500: 2,
  };

  const handleClick = (id) => {
    getPhotoById(id);
    handleClose();
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <Box p={3} className={classes.root}>
      <Box className={classes.container}>
        <Masonry
          breakpointCols={breakpoints}
          className={classes.masonryGrid}
          columnClassName={classes.masonryGridColumn}
        >
          {history.length > 0 &&
            history?.map((tile) => (
              <div key={tile.id} className={classes.item}>
                <Link href="#" onClick={() => handleClick(tile.id)}>
                  <img
                    src={tile.thumbnail}
                    alt={tile.description}
                    className={classes.image}
                  />
                </Link>
              </div>
            ))}
        </Masonry>
      </Box>
      <Box className={classes.footer}>
        <BalloonTip content="Clear History" placement="right">
          <IconButton onClick={handleClearHistory}>
            <AiOutlineClear />
          </IconButton>
        </BalloonTip>
        <CloseModalButton handleClose={handleClose} />
      </Box>
    </Box>
  );
}
