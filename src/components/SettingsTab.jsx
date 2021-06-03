import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Divider, IconButton, List, ListItem } from '@material-ui/core';
import {
  AmPmSwitch,
  BackgroundSlider,
  ClockSwitch,
  DateSwitch,
  KeywordsTextField,
  SecondsSwitch,
  TempUnitSwitch,
  WeatherInfoList,
  WeatherLocationTextField,
  WeatherSwitch,
} from '.';
import { MdClear } from 'react-icons/md';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: '95% 5%',
    padding: theme.spacing(0, 3),
    height: '100%',
  },
  listGroup: {
    display: 'flex',
    width: '100%',
  },
  list: {
    width: '50%',
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));

export default function SettingsTab({ handleClose }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.listGroup}>
        <List className={classes.list}>
          <ListItem>
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
            <BackgroundSlider />
          </ListItem>
        </List>
        <Divider orientation="vertical" flexItem />
        <List className={classes.list}>
          <ListItem>
            <WeatherLocationTextField />
          </ListItem>
          <ListItem>
            <TempUnitSwitch />
          </ListItem>
          <ListItem>
            <WeatherSwitch />
          </ListItem>
          <Divider variant="middle" />
          <ListItem>
            <WeatherInfoList />
          </ListItem>
        </List>
      </Box>
      <Box component="footer" className={classes.footer}>
        <IconButton onClick={() => handleClose()}>
          <MdClear />
        </IconButton>
      </Box>
    </Box>
  );
}
