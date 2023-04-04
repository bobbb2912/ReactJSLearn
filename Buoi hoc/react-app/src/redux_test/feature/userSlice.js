import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "day la du lieu trong redux",
    id: 12313,
    token:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia asperiores amet modi quam sapiente officiis qui quasi molestias quia at",
  },
  //   list action trong reducers
  reducers: {
    changeToken: (state, action) => { // state dai dien cho chinh data
      state.token='token da duoc doi';
    },
    changeName: (state, action) => {
      state.name = action.payload.data; // action.payload the hien cho chinh phan tu truyen vao

    }
  },
}); 
export const {changeToken, changeName} = userSlice.actions

export default userSlice.reducer;
