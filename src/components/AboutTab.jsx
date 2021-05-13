import React from 'react';
import { Box, Typography } from '@material-ui/core';

export default function About() {
  return (
    <Box p={3}>
      <Typography variant="h5" component="h2">
        About this app
      </Typography>
      <Typography variant="h6" component="h4">
        Version: 1.0.0
      </Typography>
    </Box>
  );
}
