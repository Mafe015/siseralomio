import React from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  ListItemButton 
} from '@mui/material';
import { 
  Storefront as ProductosIcon, 
  Inventory as InventarioIcon, 
  ShoppingCart as VentasIcon 
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar: React.FC = () => {
  const menuItems = [
    { 
      text: 'Productos', 
      icon: <ProductosIcon />, 
      path: '/productos' 
    },
    { 
      text: 'Inventario', 
      icon: <InventarioIcon />, 
      path: '/inventario' 
    },
    { 
      text: 'Ventas', 
      icon: <VentasIcon />, 
      path: '/ventas' 
    }
  ];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {menuItems.map((item) => (
          <ListItem 
            disablePadding 
            key={item.text}
          >
            <ListItemButton 
              component={Link} 
              to={item.path}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;