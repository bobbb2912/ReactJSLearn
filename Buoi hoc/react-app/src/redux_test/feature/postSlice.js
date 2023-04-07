import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data:[
        {id:'1', content:'Day la bai viet so 1', title:'Bai viet 1', rate: 3},
        {id:'2', content:'Hello', title:'Bai viet 2', rate: 2},
        {id:'3', content:'Irure eiusmod qui qui est commodo eu dolor nostrud pariatur exercitation fugiat Lorem qui sint.', title:'Bai viet 3', rate: 5},
        {id:'4', content:'Amet consequat ut sunt nulla nulla excepteur sint nostrud consequat est excepteur pariatur duis eiusmod. Sit dolore excepteur minim est quis sunt labore dolore aliquip nulla consequat ex tempor. Consequat et pariatur Lorem ipsum do labore amet irure cupidatat. Nostrud ut aliqua ut fugiat elit eu nulla pariatur enim dolore sunt velit aliquip. Ex Lorem nostrud magna et laboris qui mollit cillum magna nulla reprehenderit.', title:'Bai viet 4', rate: 5},

    ],
    dataFilter:null
}

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
        const data = state.filter((i) => i.id===action.payload);
        
    },
    filterPost: (state, action) => {
// loc tat ca ca bai post co rate >= action.payload
        const convertData = JSON.parse(JSON.stringify(state));
        const dataFilter = convertData.data.filter((i) => i.rate>action.payload);
         convertData.dataFilter = dataFilter;
        return convertData;
    },
    resetPost: (state, action) => {
// loc tat ca ca bai post co rate >= action.payload
        state.dataFilter = null;
    },
  }
});

export const {addPost, deletePost, editPost, filterPost, resetPost} = postSlice.actions

export default postSlice.reducer