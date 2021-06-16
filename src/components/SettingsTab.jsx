import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Divider, IconButton, List, ListItem } from '@material-ui/core';
import { motion } from 'framer-motion';
import { IoReload } from 'react-icons/io5';
import {
  AmPmSwitch,
  Annotation,
  BackgroundSlider,
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
} from '.';
import { useUnsplash } from 'context/useUnsplash';

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
}));

const buttonVariants = {
  hover: {
    rotate: 360,
    transition: {
      duration: 0.8,
    },
  },
};

export default function SettingsTab({
  handleClose,
  isDarkMode,
  setIsDarkMode,
  displayClock,
  setDisplayClock,
}) {
  const { keywords, getRandomPhoto } = useUnsplash();
  const classes = useStyles();

  const handleRefresh = () => {
    getRandomPhoto(keywords);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.listGroup}>
        <List className={classes.list}>
          <ListItem>
            <KeywordsTextField />
          </ListItem>
          <ListItem>
            <ClockSwitch
              displayClock={displayClock}
              setDisplayClock={setDisplayClock}
            />
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
        <Annotation content="Refresh Photo" placement="right">
          <motion.div variants={buttonVariants} whileHover="hover">
            <IconButton onClick={handleRefresh}>
              <IoReload />
            </IconButton>
          </motion.div>
        </Annotation>
        <CloseModalButton handleClose={handleClose} />
      </Box>
    </Box>
  );
}
