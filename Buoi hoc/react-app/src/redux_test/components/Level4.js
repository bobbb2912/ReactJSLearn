import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {changeToken } from '../feature/userSlice';

export default function Level4({data}) {
  const dispatch = useDispatch();
  return (
    <div onClick={()=>{
      // changeName("test")
      dispatch(changeToken())
    }} style={{padding:"20px", backgroundColor:"pink"}}>
      ======================Level4
       {data}
       </div>
  )
}
