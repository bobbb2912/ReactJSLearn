import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {}
});

export const {} = counterSlice.actions

export default counterSlice.reducer