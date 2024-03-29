import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button } from 'react-bootstrap';

const URL = "https://635a75a238725a1746c6b8d3.mockapi.io/products/";
export default function Home()  {
    const [todos, setTodos] = useState(null);
    const [error, setError] = useState(null);
    const [valueTitle, setValueTitle] = useState("");
    const [valueDes, setValueDes] = useState("");
    const [valuePrice, setValuePrice] = useState("");
    const [loading, setLoading] = useState(false);
    const [checkUpdate, setCheckUpdate] = useState(false);
    const [addOrEdit, setaddOrEdit] = useState("Add");
    const [idEdit, setidEdit] = useState(null);
    useEffect(() => {
        getListTodo()
    }, []);

    const getListTodo = async () => {
        setLoading(true);
        try {
            const result = await axios.get(URL);
            setTodos(result.data); 
            setLoading(false);
 
        } catch (error) {
            setLoading(false);
            setError("co loi xay ra!!!");
        }
    }

    const setButton = () => {
      if(checkUpdate) {
        setaddOrEdit("Update");
        editItem();
      } else{
        setaddOrEdit("Add");
        addItem();
      }
    }

    const resetData  = () => {
      setLoading(false);
      setValueTitle("");
      setValuePrice("");
      setValueDes("");
      setaddOrEdit("Add");
      setCheckUpdate(false);
      getListTodo();
    }

    const deleteItem = async (id) => {
        setLoading(true);
        try {
            await axios.delete(`${URL}/${id}`);
            setLoading(false);
            getListTodo();
        } catch (error) {
            setLoading(false);
            setError("co loi xay ra!!!");
        }
    }

    const addItem = async () => {
        try {
            setLoading(true);
            await axios.post(URL, {
                title: valueTitle,
                description: valueDes,
                price: valuePrice
            });
            
            resetData();
            getListTodo();
        } catch (error) {
            setLoading(false);
            setError("Có lỗi xảy ra");
        }
    }

    const editItem = async () => {
        try {
            setLoading(true);
            await axios.put(`${URL}/${idEdit}`, {
                title: valueTitle,
                description: valueDes,
                price: valuePrice
            });
            setLoading(false);
            setCheckUpdate(false);
            setidEdit(null);
            resetData();
            getListTodo();
        } catch (error) {
            setLoading(false);
            setError("Có lỗi xảy ra");
        }
    }
    const setDataToForm = (item) => {
        setCheckUpdate(true)
        setValueTitle(item.title);
        setValuePrice(item.description);
        setValueDes(item.price);
        setidEdit(item.id);

    }
    useEffect(() => {
      // if(checkUpdate) {
      //   setaddOrEdit("Update");
      // } else{
      //   setaddOrEdit("Add");
      // }
    }, []);


    return (
    <div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nhập title</Form.Label>
          <Form.Control
            onChange={(text) => {
              setValueTitle(text.target.value);
            }}
            value={valueTitle}
            type="text"
            placeholder="Nhập Title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nhập description</Form.Label>
          <Form.Control
            onChange={(text) => {
              setValueDes(text.target.value);
            }}
            value={valueDes}
            type="text"
            placeholder="Nhập description"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nhập price</Form.Label>
          <Form.Control
            onChange={(text) => {
              setValuePrice(text.target.value);
            }}
            value={valuePrice}
            type="text"
            placeholder="Nhập price"
          />
        </Form.Group>

        <Button onClick={setButton} variant="primary" >
          <p>{addOrEdit}</p>
        </Button>
        <Button onClick={resetData} variant="primary">
        <p>Reset</p>
        </Button>
      </Form>
      {loading ? <p>Loading...</p> : null}
        <ul>
            {todos ? (
                todos.map((item, index) => {
                return <li key={index}>
                    <div>
                        <p className="parent-click" 
                        onClick={()=>setDataToForm(item)}> {item.title} - {" "} 
                            <span className="deleteData"
                            onClick={() => deleteItem(item.id)}>DELETE
                            </span>
                            <br/><i>{item.description}</i>
                        </p>
                    </div>
                </li>
            })
            ) : ( 
            <p>loading</p>
            )}
        </ul>
        {error && <p>{error}</p>}
    </div>
    );

  
}

