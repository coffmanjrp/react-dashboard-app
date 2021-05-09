import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Tabs, Tab } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    height: '50vh',
    backgroundColor: theme.palette.background.paper,
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
}));

function TabPanel({ children, value, index, ...rest }) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={`tab-${index}`}
      {...rest}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

export default function SettingTabs() {
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
    <div className={classes.root}>
      <Tabs
        className={classes.tabs}
        orientation={width > breakpoint ? 'vertical' : 'horizontal'}
        value={value}
        aria-label="Menu tabs"
        onChange={handleChange}
      >
        <Tab label="Settings" />
        <Tab label="History" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </div>
  );
}
