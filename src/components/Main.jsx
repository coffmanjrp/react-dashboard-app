import React from 'react';
import { Box } from '@material-ui/core';
import { Clock, Greeting } from 'components';
import { useSettings } from 'context/useSettings';

export default function Main() {
  const { displayClock } = useSettings();
  return (
    <Box component={'main'}>{displayClock ? <Clock /> : <Greeting />}</Box>
  );
}
