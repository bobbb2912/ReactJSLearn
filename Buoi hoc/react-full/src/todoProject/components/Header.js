import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import { Form, Button } from 'react-bootstrap';

function Header({handleKeyDown, setTitleInput, valueTitle, loading}) {
    
    return (
        <div>
            <div>
                <h1>todos</h1>
            </div>
            <div>

                <InputGroup className="mb-3" placeholder="dsds" 
                    onKeyDown={handleKeyDown}
                    onChange = {setTitleInput}
                    value = {valueTitle}
                    >
                    <DropdownButton
                    variant="outline-secondary"
                    title="Todo"
                    id="input-group-dropdown-1"
                    >
                    <Dropdown.Item href="#" >Clear all</Dropdown.Item>
                    <Dropdown.Item href="#">Choose all</Dropdown.Item>
                    <Dropdown.Item href="#">Clear completed</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Show all</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control aria-label="Text input with dropdown button" />
              </InputGroup>
              {loading ? <p>Loading...</p> : null}

            </div>
        </div>
    );
}

export default Header;