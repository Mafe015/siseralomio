import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button 
} from '@mui/material';
import { Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implementar lógica de logout
    navigate('/login');
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1 
      }}
    >
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1 }}
        >
          Siseralomio
        </Typography>
        <Button 
          color="inherit" 
          startIcon={<Logout />} 
          onClick={handleLogout}
        >
          Salir
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;