import React, {useState, useEffect} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios";

const URL = "https://64170268205bdf0a1d7e0d5f.mockapi.io/Todo";

function Item({ todos, deleteToDo}) {

    
    return (
        <div>
             <ListGroup as="ul">
            {todos ? (
                todos.map((item, index) => {
                return <ListGroup.Item as="li" variant="light" key={index}>
                    <div>
                        <p className="parent-click" 
                        > {item.title} - {" "} 
                            <span className="deleteData"
                            onClick={() => deleteToDo(item.id)}>X
                            </span>
                            <br/>
                        </p>
                    </div>
                    </ListGroup.Item>
            })
            ) : ( 
            <p>loading</p>
            )}
        </ListGroup>
            
        </div>
    );
}

export default Item;