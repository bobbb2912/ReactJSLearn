import React, {useState} from 'react';
import Level2 from './Level2';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { changeName } from '../feature/userSlice';

function Level1() {
  const [name, setName] = useState("Hien");
  const dispatch = useDispatch();

 const changeName1 = (data) => {
  setName('data cua level4', data);
 }
  return (
    <div style={{padding:"20px", backgroundColor:"red", color:"white"}}>
      ==========Level1 {name}
      <Level2 data={name} changeName={changeName1}/>
      <Button onClick={() => {
        dispatch(changeName({data: 'Hien edit'}));
      }} variant="success">
        Change Name
      </Button>
    </div>
  );
}

export default Level1;