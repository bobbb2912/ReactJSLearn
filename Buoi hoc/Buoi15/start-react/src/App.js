import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Menu from './component/Menu';
import { Footer } from './component/Footer';
// import Menu from 
// state, data trong app

// const student = {
//   name: 'hien', age: 30
// };

// let counter = 0;

function App() {
  const [counter, setCounter] = useState(0);
  const [student, setStudent] = useState({name: 'Hien', age: 20});
  return (
    <div className="App">
    <Menu/>
      <h1 className='change-text'>name: {student.name}</h1>
      <h3>{student.age}</h3>
      <h3>counter = {counter}</h3>
      <button onClick={()=>{
        setCounter(counter+1);
        setStudent({name: 'Test', age: 30});
        console.log(counter);
      }}>
        Click
      </button>
      <Footer/>
    </div>
  );
}

export default App;
