import React, { FC } from "react";
import clsx from 'clsx';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core';
import { DrawerMenuList } from './DrawerMenuList';
import { Anchor, Any } from "./types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    }
  })
);

export const DrawerMenu: FC<Any> = (props) => {
  const classes = useStyles();

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      // onClick={props.toggleDrawer(anchor, false)}
      onKeyDown={props.toggleDrawer(anchor, false)}
    >
      <DrawerMenuList />
      {/* <List>
        <ListItem button key='About Us' component={Link} to="/about">
          <ListItemIcon><HomeIcon style={{ color: green[500] }} /></ListItemIcon>
          <ListItemText primary='About Us' />
        </ListItem>

        <ListItem button key='Get Started for Free!' component={Link} to="/signup">
          <ListItemIcon><BoltIcon style={{ color: red[500] }} /></ListItemIcon>
          <ListItemText primary='Get Started for Free!' />
        </ListItem>

        <ListItem button key='Testimonials' component={Link} to="/">
          <ListItemIcon><ConfirmIcon style={{ color: yellow[500] }} /></ListItemIcon>
          <ListItemText primary='Testimonials' />
        </ListItem>

        <ListItem button key='Our Products' component={Link} to="/">
          <ListItemIcon><RobotIcon style={{ color: blue[500] }} /></ListItemIcon>
          <ListItemText primary='Our Products' />
        </ListItem>

        <ListItem button key='Contact Us'>
          <ListItemIcon><ContactIcon style={{ color: orange[500] }} /></ListItemIcon>
          <ListItemText primary='Contact Us' />
        </ListItem>
      </List> */}
    </div>
  );

  return (
    <Drawer anchor={'top'} open={props.isDrawerOpen['top']} onClose={props.toggleDrawer('top', false)}>
      {list('top')}
    </Drawer>
  )
}