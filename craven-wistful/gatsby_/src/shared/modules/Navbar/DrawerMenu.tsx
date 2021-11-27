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
      onKeyDown={props.toggleDrawer(anchor, false)}
    >
      <DrawerMenuList directories={props.directories} />
    </div>
  );

  return (
    <Drawer anchor={'top'} open={props.isDrawerOpen['top']} onClose={props.toggleDrawer('top', false)}>
      {list('top')}
    </Drawer>
  )
}