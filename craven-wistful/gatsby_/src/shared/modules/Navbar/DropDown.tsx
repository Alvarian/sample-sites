import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Drawer,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core/';
import { Menu as MenuIcon } from '@material-ui/icons';
import { HomeIcon, ContactIcon } from './components/Icons';
import { green, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    fullList: {
      width: 'auto',
    }
  })
);

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const TemporaryDrawer = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListItem button key='Get Started for Free!'>
        <ListItemIcon><HomeIcon style={{ color: green[500] }} /></ListItemIcon>
        <ListItemText primary='Get Started for Free!' />
      </ListItem>

      <ListItem button key='About Us'>
        <ListItemIcon><ContactIcon style={{ color: red[500] }} /></ListItemIcon>
        <ListItemText primary='About Us' />
      </ListItem>

      {/* <List>
        {['About Us', 'Get Started for Free!', 'Testimonials', 'Our Products', 'Contact Us'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}

      {/* <Divider />
      <List>
        {['Sign up', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer('top', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Drawer anchor={'top'} open={state['top']} onClose={toggleDrawer('top', false)}>
        {list('top')}
      </Drawer>
    </div>
  );
}
