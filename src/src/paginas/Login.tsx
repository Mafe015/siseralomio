import React from 'react';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Box 
} from '@mui/material';

const Login: React.FC = () => {
  return (
    <Container maxWidth="xs">
      <Box 
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Correo Electrónico"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Contraseña"
          type="password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Iniciar Sesión
        </Button>
      </Box>
    </Container>
  );
};

export default Login;