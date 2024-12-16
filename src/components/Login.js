
import React, { useState, useContext } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim()) {
      setUser({ username });
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>Login</Button>
    </Container>
  );
};

export default Login;
