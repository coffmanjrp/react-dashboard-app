import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Divider, List, ListItem } from '@material-ui/core';
import {
  AmPmSwitch,
  ClockSwitch,
  DateSwitch,
  KeywordsTextField,
  SecondsSwitch,
  TempUnitSwitch,
  WeatherSwitch,
} from '.';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(3),
    width: '100%',
  },
  list: {
    width: '50%',
  },
  listItem: {},
}));

export default function SettingsTab() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <KeywordsTextField />
        </ListItem>
        <ListItem>
          <ClockSwitch />
        </ListItem>
        <ListItem>
          <SecondsSwitch />
        </ListItem>
        <ListItem>
          <DateSwitch />
        </ListItem>
        <ListItem>
          <AmPmSwitch />
        </ListItem>
        <ListItem>
          <WeatherSwitch />
        </ListItem>
        <ListItem>
          <TempUnitSwitch />
        </ListItem>
      </List>
      <Divider orientation="vertical" flexItem />
      <List>
        {/* <ListItem>
          <KeywordsTextField />
        </ListItem>
        <ListItem>
          <AmPmSwitch />
        </ListItem> */}
      </List>
    </Box>
  );
}
