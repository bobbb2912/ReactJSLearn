import React, {useState} from 'react';
import Body from './Body';
import Footer from './Footer';


function Main() {
    const [showFooter, setShowFooter] = useState(false);

    const toggleFooter = () => {    
        setShowFooter(!showFooter);
    };
    return (
       
        <div>
            <h1>Menu</h1>
            <button onClick={toggleFooter}>toggleFooter</button>
            {showFooter === true ? (
                <Body show={Footer}/>
            ) : null}
            {/* <Body show = {showFooter === true ? ():null}/> */}
           
        </div>
    );
}

export default Main;