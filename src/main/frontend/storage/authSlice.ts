import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CREATE_TOKEN, VALIDATE_URL } from 'Frontend/utils/urls';

interface AuthState {
  token: string | null;
  user: any|null; 
}

const initialState: AuthState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
        state.token = action.payload;
    },
    setUser(state, action: PayloadAction<any>) {
        state.user = action.payload;
    },
  }
});

export const { setToken, setUser } = authSlice.actions;
export default authSlice.reducer;
