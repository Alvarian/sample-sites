import React from 'react';
import { Link } from 'gatsby';
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
import { directories } from '../../../shared/data/directories';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

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
        {directories.map(directory => {
          return (
            <Tab label={directory.name} {...a11yProps(0)} />
          )
        })}

        {/* 
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <List>
          <ListItem button key='About Us' component={Link} to="/about">
            <ListItemIcon><HomeIcon style={{ color: green[500] }} /></ListItemIcon>
            <ListItemText primary='About Us' />
          </ListItem>

          {/* <ListItem button key='Get Started for Free!' component={Link} to="/signup">
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
        </List>
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
