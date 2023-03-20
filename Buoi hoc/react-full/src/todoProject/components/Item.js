import React, {useState, useEffect} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios";
import { CloseButton } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const URL = "https://64170268205bdf0a1d7e0d5f.mockapi.io/Todo";

function Item({ todos, deleteToDo, valueIsDone, setvalueIsDone, changeDoneTodo}) {

    
    return (
        <div>
             <ListGroup as="ul" className='itemTodo rounded border border-secondary d-flex '> 
            {todos ? (
                todos.map((item, index) => {
                return <ListGroup.Item as="li" variant="light" key={index}>
                    <div>
                        <div className="parent-click font-weight-light d-flex flex-row align-items-center justify-content-between" >
                            <div className='d-flex'>
                                <Form.Check aria-label="option 1" 
                                className='btnCheckTodo' 
                                checked={item.isDone} 
                                onChange = {changeDoneTodo}
                                /> 
                                {item.title}
                            </div>
                            
                            <CloseButton className='btn btn-danger' onClick={() => deleteToDo(item.id)}/>
                        </div>
                    </div>
                    </ListGroup.Item>
            })
            ) : ( 
            <p>loading...</p>
            )}
        </ListGroup>
            
        </div>
    );
}

export default Item;