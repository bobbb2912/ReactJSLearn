import React, {useState} from 'react';
import Body from './Body';
import Footer from './Footer';


function Main() {
    const [listStudent, setListStudent] = useState([
        {name:'Hien', age: 21},
        {name:'Giang', age: 21},
        {name:'Uyen', age: 21},
        {name:'Linh', age: 21},
        {name:'Trang', age: 21},
    ]);
    const [showFooter, setShowFooter] = useState(false);

    const toggleFooter = () => {    
        setShowFooter(!showFooter);
    };
    return (
       
        <div>
            <h1>Menu</h1>
            <button onClick={toggleFooter}>toggleFooter</button>
            <Body listStudent = {listStudent}/>
            {showFooter === true ? (
                <Footer/>
            ) : null}
           
        </div>
    );
}

export default Main;