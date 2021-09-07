import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Tabs,
  Tab,
  Typography,
  Box,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';
import {
  HomeIcon,
  ContactIcon,
  ConfirmIcon,
  RobotIcon,
  BoltIcon
} from '../../components/Icons';
import { green, red, yellow, blue, orange } from '@material-ui/core/colors';
import { TabPanelProps } from './types';

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export const DrawerMenuList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const directories = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          directories {
            name,
            children {
              name,
              endpoint
            }
          }
        }
      }
    }
  `);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {directories.site.siteMetadata.directories.map((directory: any) => {
          console.log(directory)
          return (
            <Tab key={directory.name} label={directory.name} {...a11yProps(0)} />

            // <ListItem>
            //   <ListItemIcon><HomeIcon style={{ color: green[500] }} /></ListItemIcon>

            //   <Tab key={directory.name} label={directory.name} {...a11yProps(0)} />
            // </ListItem>
          )
        })}
      </Tabs>

      {directories.site.siteMetadata.directories.map((directory: any, index: number) => {
        return (
          <TabPanel key={directory.name} value={value} index={index}>
            {directory.children.map((child: any) => {
              return (
                <Box key={child.name} component="span" m={1}>
                  <a href={child.endpoint} color="inherit">{child.name}</a>
                </Box>
              )
            })}
          </TabPanel>
        )
      })}
    </div>
  );
}
