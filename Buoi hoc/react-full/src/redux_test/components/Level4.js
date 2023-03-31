import React from 'react'

export default function Level4({data, changeName}) {
  return (
    <div onClick={()=>{
      changeName("test")
    }} style={{padding:"20px", backgroundColor:"pink"}}>
      ======================Level4 {data}</div>
  )
}
