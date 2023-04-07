import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    data:{},
    dataFilter:null,
    loading: false,
    error: null
}
export const getListPost = createAsyncThunk('products/getList',
 async(arg, thunkApi) =>{
    console.log('bb arg', arg);
    console.log('bb thunkApi getState', thunkApi.getState);
    console.log('bb thunkApi dispatch', thunkApi.dispatch(filterPost(2)));
    const res = await axios.get('https://reactjs-9478f-default-rtdb.firebaseio.com/products.json');
    console.log('res',res);
     return res.data;
 });
export const deletePostAPI = createAsyncThunk('products/deletePost',
 async(arg, thunkApi) =>{
    const res = await axios.delete(`https://reactjs-9478f-default-rtdb.firebaseio.com/products/${arg}.json`);
    thunkApi.dispatch(getListPost());
     return res.data;
 });

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
        // push la method thay doi truc tiep state, k return=> redux tookit tao ban sao
        state.push(    {
            id: action.payload.id,
            content:action.payload.content, 
            title: action.payload.title, 
            rate: 0},
        )
        
    },
    deletePost: (state, action) => {
        const newData = state.filter((i) => i.id !==action.payload);
        return newData;
    },
    editPost: (state, action) => {
        // const data = state.filter((i) => i.id===action.payload);
        
    },
    filterPost: (state, action) => {
// loc tat ca ca bai post co rate > action.payload
        const convertData = JSON.parse(JSON.stringify(state));
        const dataFilter = Object.keys(convertData.data).filter(
        (i) => convertData.data[i].rate>action.payload);
        
        state.dataFilter = dataFilter;
    },
    resetPost: (state, action) => {
// loc tat ca ca bai post co rate >= action.payload
        state.dataFilter = null;
    },
  },
  extraReducers(builder) {
    builder
        .addCase(getListPost.pending, (state, action) => {
            state.loading=true;
        }) 
        .addCase(getListPost.fulfilled, (state, action) => {
            state.loading=false;
            state.data=action.payload;
        }) 
        .addCase(getListPost.rejected, (state, action) => {
            state.loading=false;
            state.error = 'error';
        }) 
        .addCase(deletePostAPI.pending, (state, action) => {
            state.loading=true;
        }) 
        .addCase(deletePostAPI.fulfilled, (state, action) => {
            state.loading=false;
        }) 
        .addCase(deletePostAPI.rejected, (state, action) => {
            state.loading=false;
            state.error = 'error';
        }) 
  }
});

export const {addPost, deletePost, editPost, filterPost, resetPost} = postSlice.actions

export default postSlice.reducer