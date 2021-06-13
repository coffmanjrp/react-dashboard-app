import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, Box, Fade, Modal } from '@material-ui/core';
import { MenuTabs } from 'components';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    height: '90vh',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
    padding: theme.spacing(2, 1),
    color: theme.palette.text.primary,
    overflow: 'hidden',
  },
}));

export default function MenuModal({
  open,
  handleClose,
  isDarkMode,
  setIsDarkMode,
  displayClock,
  displaySeconds,
  displayDate,
  displayAmpm,
  setDisplayClock,
  setDisplaySeconds,
  setDisplayDate,
  setDisplayAmpm,
}) {
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box className={classes.modal}>
          <MenuTabs
            handleClose={handleClose}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            displayClock={displayClock}
            displaySeconds={displaySeconds}
            displayDate={displayDate}
            displayAmpm={displayAmpm}
            setDisplayClock={setDisplayClock}
            setDisplaySeconds={setDisplaySeconds}
            setDisplayDate={setDisplayDate}
            setDisplayAmpm={setDisplayAmpm}
          />
        </Box>
      </Fade>
    </Modal>
  );
}
