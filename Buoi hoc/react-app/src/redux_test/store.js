import { configureStore } from '@reduxjs/toolkit'
import userReducer from './feature/userSlice';
import counterSlice from './feature/counterSlice';
import postSlice from './feature/postSlice';

export default configureStore({
  reducer: {
    userReducer,
    counterReducer: counterSlice,
    postReducer: postSlice,
  }
})