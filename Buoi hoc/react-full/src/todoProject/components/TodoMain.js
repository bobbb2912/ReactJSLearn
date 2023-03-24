import React, {useState, useEffect} from 'react';
import axios from "axios";
import Header from './Header';
import Item from './Item';

const URL = "https://64170268205bdf0a1d7e0d5f.mockapi.io/Todo";
function TodoMain() {
    const [todos, setTodos] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [valueTitle, setValueTitle] = useState("");
    const [valueIsDone, setvalueIsDone] = useState(false);
    
    useEffect(() => {
        getListTodo()
    }, []);

    const handleKeyDown = (event) => {
        if(event.keyCode===13) {
            addTodo();
        }
    }

    const resetData  = () => {
        setLoading(false);
        setValueTitle("");
        getListTodo();
      }

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
  
    const addTodo = async () => {
        try {
            setLoading(true);
            await axios.post(URL, {
                title: valueTitle,
                isDone: valueIsDone
            });
            
            resetData();
            getListTodo();
        } catch (error) {
            setLoading(false);
            setError("Có lỗi xảy ra");
        }
    }
    const deleteToDo = async (id) => {
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
    const setTitleInput = (text) => {
        setValueTitle(text.target.value);
    }

    const changeDoneTodo = (event) => {
        setvalueIsDone(event.target.checked);
        console.log('====================================');
        console.log(event.target.checked, valueIsDone);
        console.log('====================================');
    }
    return (
        <div>
            <Header 
                handleKeyDown = {handleKeyDown}
                setTitleInput = {setTitleInput}
                loading = {loading}
            />
            <Item
              todos = {todos}
              deleteToDo = {deleteToDo}
              valueTitle = {valueTitle}
              valueIsDone = {valueIsDone}
              setvalueIsDone = {setvalueIsDone}
              changeDoneTodo = {changeDoneTodo}
              />

            {error && <p>{error}</p>}
        </div>
    );
}

export default TodoMain;