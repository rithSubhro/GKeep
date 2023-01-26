import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from 'react-router-dom';


const drawerWidth = 240;
let iconName="";
let route="";
const imgLogo = "https://www.google.com/images/icons/product/keep-512.png";

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  zIndex: 999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin']),
  ...(open || {
    // marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    // transition: theme.transitions.create(['width', 'margin']),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const headerStyle = {
  backgroundColor: "#fff",
  minHeight: 70,
  // padding:0,
};

const SwipeDrawer = ()=> {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    if(open === false)
        setOpen(true);
    else
      setOpen(false);
  };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  const calculateIndex = (indx) =>{
    if(indx === 0){
      iconName = <LightbulbIcon />;
      route= '/';
    }else if (indx === 1){
      iconName = <NotificationsNoneIcon />;
      route= '/';
    }else if(indx === 2){
      iconName = <ModeEditOutlineIcon />;
      route= '/';
    }else if(indx === 3){
      iconName = <MoveToInboxIcon />;
      route= '/archive';
    }else{
      iconName = <DeleteOutlineIcon />;
      route= '/delete';
    }
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={headerStyle}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 3,
              color:"#8a887f",
              ...(open && { display: 'block' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src="https://www.google.com/images/icons/product/keep-512.png" alt="" style={{width: 50,marginRight:10}} />
          <Typography variant="h6" noWrap component="div" style={{color:"#8a887f"}}>
            GKeeP
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerOpen}>
            {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Notes', 'Reminders', 'Edit Labels', 'Archive','Bin'].map((text, index) => (
            calculateIndex(index),
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <Link to={route}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {iconName}
                  
                </ListItemIcon>
                </Link>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
    </Box>
  );
}

export default SwipeDrawer;