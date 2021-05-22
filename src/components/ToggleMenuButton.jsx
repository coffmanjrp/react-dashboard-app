import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, Box, Fade, IconButton, Modal } from '@material-ui/core';
import { motion } from 'framer-motion';
import { IoSettingsOutline } from 'react-icons/io5';
import { Annotation, MenuTabs } from '.';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '2.8rem',
    height: '2.8rem',
  },
  button: {
    width: '100%',
    height: '100%',
    fontSize: '1.3rem',
    color: 'inherit',
  },
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
  },
}));

const buttonVariants = {
  hover: {
    rotate: 180,
    transition: {
      duration: 0.8,
    },
  },
};

export default function ToggleMenuButton() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Annotation content="Settings" placement="top">
        <motion.div
          className={classes.root}
          variants={buttonVariants}
          whileHover="hover"
        >
          <IconButton
            className={classes.button}
            aria-label="Settings"
            onClick={handleOpen}
          >
            <IoSettingsOutline />
          </IconButton>
        </motion.div>
      </Annotation>
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
            <MenuTabs />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
