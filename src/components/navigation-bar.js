import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';    
import { AccountCircle, Cookie, MenuBook } from '@mui/icons-material';

export default function NavigationBar() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction to="/home" label="Diario" icon={<MenuBook />} />
          <BottomNavigationAction to="/detalles" label="Recetas" icon={<Cookie />} />
          <BottomNavigationAction label="Perfil" icon={<AccountCircle />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
