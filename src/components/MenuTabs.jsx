import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Tabs, Tab } from '@material-ui/core';
import { AboutTab, HistoryTab, SettingsTab } from '.';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    backgroundColor: theme.palette.background.paper,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down('sm')]: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  tabPanel: {
    width: '100%',
    height: '100%',
  },
}));

function TabPanel({ children, value, index, ...rest }) {
  const classes = useStyles();

  return (
    <Box
      className={classes.tabPanel}
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={`tab-${index}`}
      {...rest}
    >
      {value === index && <>{children}</>}
    </Box>
  );
}

export default function MenuTabs({
  handleClose,
  isDarkMode,
  setIsDarkMode,
  displayClock,
  displaySeconds,
  displayDate,
  displayAmpm,
  setDisplayClock,
  setDisplaySeconds,
  setDisplayDate,
  setDisplayAmpm,
}) {
  const [value, setValue] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;
  const classes = useStyles();

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <Tabs
        className={classes.tabs}
        orientation={width > breakpoint ? 'vertical' : 'horizontal'}
        value={value}
        indicatorColor="primary"
        aria-label="Menu tabs"
        onChange={handleChange}
      >
        <Tab label="Settings" />
        <Tab label="History" />
        <Tab label="About" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SettingsTab
          handleClose={handleClose}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          displayClock={displayClock}
          displaySeconds={displaySeconds}
          displayDate={displayDate}
          displayAmpm={displayAmpm}
          setDisplayClock={setDisplayClock}
          setDisplaySeconds={setDisplaySeconds}
          setDisplayDate={setDisplayDate}
          setDisplayAmpm={setDisplayAmpm}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HistoryTab handleClose={handleClose} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AboutTab handleClose={handleClose} />
      </TabPanel>
    </Box>
  );
}
