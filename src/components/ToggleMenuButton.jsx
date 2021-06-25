import React from 'react';
import { makeStyles, IconButton } from '@material-ui/core';
import { motion } from 'framer-motion';
import { IoSettingsOutline } from 'react-icons/io5';
import { BalloonTip, MenuModal } from 'components';
import { useSettings } from 'context/useSettings';

const useStyles = makeStyles({
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
});

const buttonVariants = {
  hover: {
    rotate: 180,
    transition: {
      duration: 0.8,
    },
  },
};

export default function ToggleMenuButton({ isDarkMode, setIsDarkMode }) {
  const { setOpen } = useSettings();
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <BalloonTip content="Settings" placement="top">
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
      </BalloonTip>
      <MenuModal isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </>
  );
}
