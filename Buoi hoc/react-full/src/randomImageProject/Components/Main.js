import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Main = (props) => {
    const [inputNumber, setInputNumber] = useState('');
    const [urlImage, setUrlImage] = useState('');
    const handleSubmit = (event) => {
        // https://picsum.photos/v2/list?limit=1
        // setInputNum
        event.preventDefault(); 
        console.log('====================================');
        console.log('value: ', {inputNumber});
        console.log('====================================');
        
        setUrlImage('https://picsum.photos/v2/list?limit='+{inputNumber});
        console.log('====================================');
        console.log('https://picsum.photos/v2/list?limit=', {inputNumber});
        console.log('====================================');

    }

    return (
        <div>
        <h1>Random Image</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
            <Form.Label>Enter a number</Form.Label>
            <Form.Control name="inputNumber" type="number" placeholder="Enter number (1->10)" max={10} min={1} 
            onChange={event => setInputNumber(event.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
        <div className="d-flex flex-wrap">

        </div>
        </div>
    );
}

export default Main;
