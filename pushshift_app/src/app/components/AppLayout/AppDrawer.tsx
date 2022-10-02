import React from 'react';
import { 
  Box,
  Divider,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  List,
} from '@mui/material';
import { routes } from 'app/routes';
import { LayoutTypes } from 'types/common';
import { Link } from 'react-router-dom';

export const AppDrawer: React.FC<LayoutTypes> = ({ handleDrawerToggle, mobileOpen }) => {

  const container = window !== undefined ? () => (window as any).document.body : undefined;


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        JWST
      </Typography>
      <Divider />
      <List>
        {routes.map((route) => (
          <Link to={route.path} key={route.name}>
            <ListItem key={route.name} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={route.path} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
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
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
      }}
    >
      {drawer}
    </Drawer>
  )
}