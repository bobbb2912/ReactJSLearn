import React from 'react'
import Level4 from './Level4';

export default function Level3({data, changeName}) {
  return (
    <div style={{padding:"20px", backgroundColor:"green"}}>
      ==================Level3 {data}
      <Level4 data={data} changeName = {changeName}/>
    </div>
  )
}
