import React from 'react'
import Level4 from './Level4';
import { useSelector } from 'react-redux';

export default function Level3({data, changeName}) {
  const userData = useSelector((state) =>state.userReducer);
  console.log('userdata: ', userData);
  return (
    <div style={{padding:"20px", backgroundColor:"green"}}>
      ==================Level3 {data}
      <h3>du lieu trong store</h3>
      {userData.token} <br/>
      {userData.name}
      <Level4 data={data} changeName = {changeName}/>
    </div>
  )
}
