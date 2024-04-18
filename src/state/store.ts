import { configureStore } from '@reduxjs/toolkit';
import idReducer from './idSlice';

const store = configureStore({
  reducer: {
    id: idReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
