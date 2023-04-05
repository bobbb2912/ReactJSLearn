import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 10
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increeCount: (state,action) => {
      state.value+=1;
    },
    increeCountWithParams: (state,action) => {
      state.value+=action.payload;
    }
  }
});

export const {increeCount, increeCountWithParams} = counterSlice.actions

export default counterSlice.reducer