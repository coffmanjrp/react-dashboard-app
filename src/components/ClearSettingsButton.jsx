import React, { useState } from 'react';
import {
  makeStyles,
  Box,
  Button,
  IconButton,
  Modal,
  Typography,
} from '@material-ui/core';
import { AiOutlineStop } from 'react-icons/ai';
import { BalloonTip } from 'components';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  text: {
    marginBottom: theme.spacing(1),
  },
  btnContainer: {
    display: 'flex',
    gap: '10px',
  },
}));

export default function ClearSettingsButton({ handleClear }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Box id="clear-settings" className={classes.modal}>
      <Typography variant="h6" className={classes.text}>
        Are you sure you want to clear the settings?
      </Typography>
      <Box className={classes.btnContainer}>
        <Button color="primary" onClick={handleClear}>
          Yes
        </Button>
        <Button onClick={handleClose}>Cancel</Button>
      </Box>
    </Box>
  );

  return (
    <Box>
      <BalloonTip content="Clear Settings" placement="right">
        <IconButton onClick={handleOpen}>
          <AiOutlineStop />
        </IconButton>
      </BalloonTip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="clear-settings"
        aria-describedby="clear-settings"
      >
        {body}
      </Modal>
    </Box>
  );
}
