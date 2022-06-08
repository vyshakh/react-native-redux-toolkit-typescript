import {
  createSlice,
  createAction,
  PayloadAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import {user} from '@api';

export interface userData {
  firstName: string;
  userId: number;
}

export interface userDef {
  isLoggedIn: boolean;
  isLoading: boolean;
  profile: userData;
}

export interface userLoginDef {
  username: string;
  password: string;
}

const initialState: userDef = {
  isLoading: false,
  isLoggedIn: false,
  profile: {} as userData,
};

// ThunkAPI {
//     dispatch: Function
//     getState: Function
//     extra?: any
//     requestId: string
//     signal: AbortSignal
// }
// https://redux-toolkit.js.org/usage/usage-guide
//const login = createAsyncThunk('user/login', async (payload, thunkAPI) => {
const login = createAsyncThunk('user/login', async (payload: userLoginDef) => {
  const data = await user.login(payload);
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log('payload', action.payload);
        state.profile = action.payload;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default {...userSlice, actions: {...userSlice.actions, login}};
