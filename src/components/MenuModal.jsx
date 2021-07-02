import React from 'react';
import { makeStyles, Backdrop, Box, Fade, Modal } from '@material-ui/core';
import { MenuTabs } from 'components';
import { useSettings } from 'context/useSettings';

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

export default function MenuModal({ isDarkMode, setIsDarkMode }) {
  const { open, setOpen } = useSettings();
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="menu-modal"
      aria-describedby="menu-modal"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box className={classes.modal}>
          <MenuTabs
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            handleClose={handleClose}
          />
        </Box>
      </Fade>
    </Modal>
  );
}
