import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import { Form, Button } from 'react-bootstrap';

function Header({handleKeyDown, setTitleInput, valueTitle, 
    active, action, 
    clearCompleted, 
    showAll, completed}) {
    
    return (
        <div>
            <div>
                <h1  className="d-flex justify-content-center text-uppercase text-primary HeaderToDo">todos</h1>
            </div>
            <div>

                <InputGroup className="mb-3 inputTodo"
                    
                    onKeyDown={handleKeyDown}
                    onChange = {setTitleInput}
                    value = {valueTitle}
                    >
                    <DropdownButton
                    variant="outline-secondary"
                    title={action}
                    id="input-group-dropdown-1"
                    >
                    <Dropdown.Item href="#" onClick={active}>Active</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={completed}>Completed</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={clearCompleted}>Clear completed</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#" onClick={showAll}>Show all</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control aria-label="Text input with dropdown button" placeholder='What needs to be done?' className='border border-secondary ' />
              </InputGroup>
              {/* {loading ? <p>Loading...</p> : null} */}

            </div>
        </div>
    );
}

export default Header;