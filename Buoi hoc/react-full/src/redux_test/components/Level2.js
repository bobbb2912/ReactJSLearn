import React from 'react'
import Level3 from './Level3';

export default function Level2({data, changeName}) {
  return (
    
    <div style={{padding:"20px", backgroundColor:"blue"}}>
      ==============Level2  {data}
      <Level3 data ={data} changeName={changeName}/>
    </div>
  )
}
