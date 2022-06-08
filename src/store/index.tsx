import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {useDispatch} from 'react-redux';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

const userActions = userSlice.actions;

const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export type RootStateType = ReturnType<typeof store.getState>;
export {store, userActions, useAppDispatch};
