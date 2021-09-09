import React, { FC } from 'react';
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
import { TabPanelProps, Any } from './types';
import { CloseSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '40vh',
    "& .MuiTabs-flexContainerVertical": {
      height: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      borderRight: `1px solid ${theme.palette.divider}`
    }
  },
  tabpanelcontainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    fontSize: '18pt'
  },
  tab: {
    fontSize: '18pt'
  }
}));

function TabPanel(props: TabPanelProps) {
  const classes = useStyles();
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ height: '100%' }}
      {...other}
    >
      {value === index && (
        <Box className={classes.tabpanelcontainer} p={3}>
          {children}
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

export const DrawerMenuList: FC<Any> = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        height="100%"
      >
        {props.directories.site.siteMetadata.directories.map((directory: any, index: number) => {
          return (
            <Tab key={directory.name} label={directory.name} {...a11yProps(index)} className={classes.tab} />

            // <ListItem>
            //   <ListItemIcon><HomeIcon style={{ color: green[500] }} /></ListItemIcon>

            //   <Tab key={directory.name} label={directory.name} {...a11yProps(0)} />
            // </ListItem>
          )
        })}
      </Tabs>

      {props.directories.site.siteMetadata.directories.map((directory: any, index: number) => {
        return (
          <TabPanel key={directory.name} value={value} index={index}>
            {directory.children.map((child: any) => {
              return (
                <Box
                  display='flex'
                  flexDirection='row'
                  key={child.name}
                  component="span"
                  m={1}
                >
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
