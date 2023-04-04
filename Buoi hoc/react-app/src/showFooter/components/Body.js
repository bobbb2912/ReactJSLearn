import React, {useState} from 'react';

function Body(props) {
    
    

    return (
        <div>
            <h1>Body</h1>
            <p>
            <ul >
                {props.listStudent.map((item, index) => {
                    return (
                        <li className='listStudent' key={index}>{item.name} - {item.age}</li>
                    )
                })}
            </ul>
            </p>
           
          
            
        </div>
    );
}

export default Body;