import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { motion } from 'framer-motion';
import { MdInbox, MdMail } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { Annotation, SettingTabs } from '.';

const useStyles = makeStyles({
  container: {
    width: '2.8rem',
    height: '2.8rem',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: '100%',
  },
  button: {
    width: '100%',
    height: '100%',
    fontSize: '1.3rem',
    color: 'inherit',
  },
});

const buttonVariants = {
  hover: {
    rotate: 180,
    transition: {
      duration: 0.8,
    },
  },
};

export default function ToggleMenuButton() {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = (open) => (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }

    setDrawer(open);
  };

  const list = () => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <MdInbox /> : <MdMail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <MdInbox /> : <MdMail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Annotation content="Settings" placement="top">
        <motion.div
          className={classes.container}
          variants={buttonVariants}
          whileHover="hover"
        >
          <IconButton
            className={classes.button}
            aria-label="Settings"
            onClick={toggleDrawer(true)}
          >
            <IoSettingsOutline />
          </IconButton>
        </motion.div>
      </Annotation>
      <Drawer anchor={'bottom'} open={drawer} onClose={toggleDrawer(false)}>
        <SettingTabs />
      </Drawer>
    </>
  );
}
