import React from 'react';
import { IconButton } from '@material-ui/core';
import { MdClear } from 'react-icons/md';

export default function CloseModalButton({ handleClose }) {
  return (
    <>
      <IconButton onClick={() => handleClose()}>
        <MdClear />
      </IconButton>
    </>
  );
}
