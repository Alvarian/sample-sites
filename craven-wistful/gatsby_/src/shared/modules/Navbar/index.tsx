import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu
} from '@material-ui/core';
import { AccountCircle, Menu as MenuIcon } from '@material-ui/icons';
import { Auth } from './Auth';
import { DrawerMenu } from './DrawerMenu';
import { Anchor } from './types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    }
  }),
);

export default function MenuAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [auth, setAuth] = React.useState(true);
  const [isDrawerOpen, setDrawer] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const open = Boolean(anchorEl);
  
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

    setDrawer({ ...isDrawerOpen, [anchor]: open });
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      {/* <Auth setAuth={setAuth} auth={auth} /> */}

      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer('top', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Photos
          </Typography>

          {/* If logged out, offer link to click-through to sign up */}
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>

        <DrawerMenu directories={props.directories} isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      </AppBar>
    </div>
  );
}
