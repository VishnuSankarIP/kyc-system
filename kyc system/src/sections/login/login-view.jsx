import React, { useState, useContext } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { Context } from 'src/routes/Store';
import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

import axiosInstance from '../../../axiosConfig';

export default function LoginView() {
  const { dispatch } = useContext(Context);
  const theme = useTheme();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    return usernameRegex.test(username);
  };
  
  const validatePassword = (password) => {
    // Minimum eight characters, at least one letter and one number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*[^A-Za-z\d]).{8,}$/;
    return passwordRegex.test(password);
  };
  
  const handleClick = async () => {
    const usernameInput = document.querySelector('input[name="username"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const username = usernameInput.value;
    const password = passwordInput.value;

    let valid = true;

    if (!username) {
      setUsernameError("Field is required");
      valid = false;
    } else if (!validateUsername(username)) {
      setUsernameError("Username not valid");
      valid = false;
    } else {
      setUsernameError("");
    }
    
    if (!password) {
      setPasswordError("Field is required");
      valid = false;
    } else if (!validatePassword(password)) {
      setPasswordError("Invalid password format");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) return;

    try {
      const response = await axiosInstance.post('/users/login/', {
        username,
        password,
      });

      console.log(' res:', response);

      if (response.data.StatusCode === 6000) {
        const { access } = response.data.token;
        dispatch({
          type: 'UPDATE_USER_DATA',
          user_data: {
            accessToken: access,
            userType: response.data.user_type,
            firstName : response.data.name,
            staffRole: response.data.roles,
          },
        });
        // Store currentRole in sessionStorage
        // sessionStorage.setItem('currentRole', response.data.staffRole);
        const staffRole = response.data.roles; // Assuming roles is the correct field name
        sessionStorage.setItem('currentRole', JSON.stringify(staffRole));
        router.push('/');

      } else {
        console.log('Login res:', response);
        const { message } = response.data;
        setLoginError(message);
        console.log(message);
      }
    } 
    catch (error) {
      console.log('Login error:', error);
      // setLoginError('An error occurred during login. Please try again.');
    }
  };
  
  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField
          name="username"
          label="Username"
          error={!!usernameError}
          helperText={usernameError}
        />
        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          error={!!passwordError}
          helperText={passwordError}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Typography color="error">{loginError}</Typography>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
        Login
      </LoadingButton>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
          Don’t have an account?
          <Link variant="subtitle2" sx={{ ml: 0.5 }}>
            Get started
          </Link>
        </Typography>
      </Box>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Logo
            sx={{
              mx: 'auto',
              my: { xs: 2, md: 2 },
              width: { xs: 80, md: 80 },
            }}
          />
          <Typography variant="h4" sx={{ mb: 5 }}>Sign in to KYC System</Typography>
          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
