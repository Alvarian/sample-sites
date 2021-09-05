import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Tabs,
  Tab,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,

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
  console.log(directories.site.siteMetadata.directories.children)

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
          return (
            <Tab key={directory.name} label={directory.name} {...a11yProps(0)} />
          )
        })}
      </Tabs>
      <TabPanel value={value} index={0}>
        {/* {directories.site.siteMetadata.directories.children.map((child: any) => {
          return (
            <ListItem button key={child.name} component={Link} to={child.endpoint}>
              <ListItemIcon><HomeIcon style={{ color: green[500] }} /></ListItemIcon>
              <ListItemText primary={child.name} />
            </ListItem>
          )
        })} */}

        {/* 
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
          </ListItem> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
