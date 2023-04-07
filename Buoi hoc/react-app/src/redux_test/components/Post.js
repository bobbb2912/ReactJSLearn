import React, {useEffect, useState} from 'react'
import { Button, Card, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { deletePost, filterPost, resetPost } from '../feature/postSlice';

export default function Post() {
    const posts = useSelector((state) => state.postReducer);
    const dispatch = useDispatch();
    const [postLocal, setPostLocal] = useState(null);
    const deleteItem = (id) => {
        dispatch(deletePost(id));
    };
    const filter = (rate) => {
        let convertPost = JSON.parse(JSON.stringify(postLocal.data));
        convertPost = convertPost.filter((i) => i.rate > rate)
        setPostLocal(convertPost);
    };
    const filterRedux = (rate) => {
        dispatch(filterPost(rate));

    };
    const reset = () => {
        setPostLocal(posts);
    }
    const resetFilterRedux = () => {
        dispatch(resetPost());
    }

    useEffect(() => {
        setPostLocal(posts);
    
    }, [posts]);
  return (
    <div>
        <h1>POST LIST</h1>
        <Button onClick={() => filter(3)}>Filter post state</Button>
        <Button style={{marginLeft:'10px', marginRight:'10px'}} 
         onClick={() => reset()}>Reset post</Button>
        <Button style={{marginLeft:'10px', marginRight:'10px'}} 
        onClick={() => filterRedux(3)}>Filter post redux</Button>
        <Button style={{marginLeft:'10px', marginRight:'10px'}} 
        onClick={() => resetFilterRedux()}>Reset filter post redux</Button>
        <Row>
        {posts.dataFilter ? posts.dataFilter.map((item, index) => {
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
        }): 
        posts.data.map((item, index) => {
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
