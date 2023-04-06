import React from 'react'
import { Button, Card, Form, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { deletePost, filterPost } from '../feature/postSlice';

export default function Post() {
    const posts = useSelector((state) => state.postReducer);
    const dispatch = useDispatch();
    const deleteItem = (id) => {
        dispatch(deletePost(id));
    };
    const filter = () => {
        dispatch(filterPost(3));
    };
  return (
    <div>
        <h1>POST LIST</h1>
        <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="" placeholder="Enter Title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Content</Form.Label>
                  <Form.Control type="" placeholder="Content" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit">
                  Edit Post 
                </Button>
              </Form>
              
        <Button onClick={filter}>Filter post</Button>
        <Row>
        {posts.map((item, index) => {
            return (
                
                <Card key={item.id} style={{ width: '18rem', marginRight:'10px', marginBottom:'10px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.content}</Card.Text>
                    <Button onClick={() => deleteItem(item.id)} variant="danger">Delete</Button>
                </Card.Body>
                </Card>
            );
        })}
         </Row>
    </div>
  )
}
