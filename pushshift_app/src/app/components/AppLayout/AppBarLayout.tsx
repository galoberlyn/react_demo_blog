import React from 'react';
import { 
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material'
import { routes } from 'app/routes';
import { LayoutTypes } from 'types/common';

export const AppBarLayout: React.FC<LayoutTypes> = ({ handleDrawerToggle, handleHistory }) => {

 
  return (
    <AppBar component="nav">
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            JWST
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {routes.map((route) => {
              if (!route.private) {
                return (
                  <Button key={route.name} sx={{ color: '#fff' }} onClick={() => handleHistory(route.path)}>
                    {route.name}
                  </Button>
                )
              }
              return null;
            })}
          </Box>
        </Toolbar>
      </AppBar>
  )
}