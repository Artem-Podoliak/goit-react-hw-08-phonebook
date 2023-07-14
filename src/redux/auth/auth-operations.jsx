import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  showInfoMessage,
  showSuccessMessage,
  showErrorMessage,
} from 'utils/notifications';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/signup', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    showSuccessMessage('New user has been created. Welcome');
    return data;
  } catch (error) {
    showErrorMessage('Invalid email. Please, try another');
    console.log(error.massage);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    showSuccessMessage('Login successful. Welcome back');
    return data;
  } catch (error) {
    showErrorMessage('Incorrect email or password');
    console.log(error.massage);
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
    showSuccessMessage('See you next time');
  } catch (error) {
    showErrorMessage('Application logout error');
    console.log(error.massage);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      showInfoMessage('The last session is resumed');
      return data;
    } catch (error) {
      showErrorMessage('User not found');
      console.log(error.massage);
    }
  }
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;
