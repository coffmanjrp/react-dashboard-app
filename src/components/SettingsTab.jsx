import React from 'react';
import {
  makeStyles,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
} from '@material-ui/core';
import { IoReload } from 'react-icons/io5';
import {
  AmPmSwitch,
  BalloonTip,
  BackgroundSlider,
  ClearSettingsButton,
  ClockSwitch,
  CloseModalButton,
  DarkModeSwitch,
  DateSwitch,
  KeywordsTextField,
  SecondsSwitch,
  TempUnitSwitch,
  WeatherInfoList,
  WeatherLocationTextField,
  WeatherSwitch,
} from 'components';
import { useUnsplash } from 'context/useUnsplash';
import { useSettings } from 'context/useSettings';
import { useWeather } from 'context/useWeather';

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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function SettingsTab({
  isDarkMode,
  setIsDarkMode,
  handleClose,
}) {
  const { keywords, getRandomPhoto } = useUnsplash();
  const {
    setAlpha,
    setDisplayClock,
    setDisplaySeconds,
    setDisplayDate,
    setDisplayAmpm,
    setDisplayWeather,
    setIsFahrenheit,
  } = useSettings();
  const { setKeywords } = useUnsplash();
  const { setLocation } = useWeather();
  const classes = useStyles();

  const handleRefresh = () => {
    getRandomPhoto(keywords);
    handleClose();
  };

  const handleClear = () => {
    setAlpha(20);
    setDisplayClock(true);
    setDisplaySeconds(false);
    setDisplayDate(true);
    setDisplayAmpm(true);
    setDisplayWeather(true);
    setIsFahrenheit(true);
    setIsDarkMode(false);
    setKeywords([]);
    setLocation('');
  };

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
            <DarkModeSwitch
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
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
        <Box className={classes.footerLeft}>
          <BalloonTip content="Refresh Photo" placement="right">
            <IconButton onClick={handleRefresh}>
              <IoReload />
            </IconButton>
          </BalloonTip>
          <ClearSettingsButton handleClear={handleClear} />
        </Box>
        <CloseModalButton handleClose={handleClose} />
      </Box>
    </Box>
  );
}
