import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const drawerWidth = 240;

const AdminDashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin } = useFirebase();
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div>
        <Toolbar />
        <Divider />
        <List>
            
          <NavLink style={{textDecoration: 'none', color: 'gray'}} to="/dashboard/allfoods">
              <ListItem button>
              <ListItemIcon>
                <RestaurantIcon />
              </ListItemIcon>
              <ListItemText>Foods</ListItemText>
              </ListItem>  
            </NavLink>
          <NavLink style={{textDecoration: 'none', color: 'gray'}} to="/dashboard/addFood">
              <ListItem button>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText>Add Food</ListItemText>
              </ListItem>  
            </NavLink>
          <NavLink style={{textDecoration: 'none', color: 'gray'}} to="/dashboard/allStudents">
              <ListItem button>
              <ListItemIcon>
                <PeopleAltIcon />
              </ListItemIcon>
              <ListItemText>Students</ListItemText>
              </ListItem>  
            </NavLink>
          <NavLink style={{textDecoration: 'none', color: 'gray'}} to="/dashboard/addStudent">
              <ListItem button>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText>Add Student</ListItemText>
              </ListItem>  
            </NavLink> 
        </List>
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
            <AppBar
                style={{backgroundColor: '#7ed956'}}
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <Link style={{textDecoration: 'none', color: 'white'}} to="/">Yooda Hostel</Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          
          {/* for nested routes */}
          <Outlet></Outlet>

        </Box>
      </Box>
    );
  }
  
  AdminDashboard.propTypes = {
    window: PropTypes.func,
  };

export default AdminDashboard;