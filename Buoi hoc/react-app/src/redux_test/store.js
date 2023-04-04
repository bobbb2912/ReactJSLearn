import { configureStore } from '@reduxjs/toolkit'
import userReducer from './feature/userSlice';
import counterSlice from './feature/counterSlice';

export default configureStore({
  reducer: {
    userReducer,
    counterReducer: counterSlice,
  }
})