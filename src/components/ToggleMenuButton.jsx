import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { motion } from 'framer-motion';
import { IoSettingsOutline } from 'react-icons/io5';
import { Annotation, MenuModal } from '.';

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
      <MenuModal open={open} handleClose={handleClose} />
    </>
  );
}
