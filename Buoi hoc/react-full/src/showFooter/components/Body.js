import React, {useState} from 'react';
import Footer from './Footer';
import Main from './Main';

function Body({show}) {
    const [listStudent, setListStudent] = useState([
        {name:'Hien', age: 21},
        {name:'Giang', age: 21},
        {name:'Uyen', age: 21},
        {name:'Linh', age: 21},
        {name:'Trang', age: 21},
    ]);
    

    return (
        <div>
            <h1>Body</h1>
            <p>
            <ul>
                {listStudent.map((item, index) => {
                    return (
                        <li key={index}>{item.name}</li>
                    )
                })}
            </ul>
                {/* <button onClick={toggleListStu}>list student</button> */}
            </p>
            {show}
          
            
        </div>
    );
}

export default Body;