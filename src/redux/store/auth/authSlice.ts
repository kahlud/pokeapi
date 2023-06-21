import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'no-authentiation',
    email: null,
    password: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {},
    logout: (state, payload) => {},
    checkingCredential: (state, {payload}) => {
      state.status = 'cheking';
    },
  },
});

export const {login, logout, checkingCredential} = authSlice.actions;

export const authReducer = authSlice.reducer;
