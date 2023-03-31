import React, {useState} from 'react';
import Level2 from './Level2';

function Level1() {
  const [name, setName] = useState("Hien");
 const changeName = (data) => {
  setName('data cua level4', data);
 }
  return (
    <div style={{padding:"20px", backgroundColor:"red", color:"white"}}>
      ==========Level1 {name}
      <Level2 data={name} changeName={changeName}/>
    </div>
  );
}

export default Level1;