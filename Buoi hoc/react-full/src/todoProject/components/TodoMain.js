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
        getListTodo();
    }, []);

 

    const handleKeyDown = (event) => {
        setvalueIsDone(false);
        if(event.keyCode===13) {
            addTodo();
        }
    }

    const resetData  = () => {
        setLoading(false);
        
        // setvalueIsDone(false);
        // setValueTitle("");
        getListTodo();
        setError("");
        console.log('resetData',valueIsDone, valueTitle);


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
            console.log('addtodo',valueIsDone, valueTitle);
            resetData();
            // setValueTitle("");
            // setvalueIsDone(false);
            // getListTodo();

        } catch (error) {
            setLoading(false);
            setError("Có lỗi xảy ra");
        }
    }
    const deleteToDo = async (id) => {
        setLoading(true);
        try {
            await axios.delete(`${URL}/${id}`);
            // setLoading(false);
            resetData();
            getListTodo();
        } catch (error) {
            setLoading(false);
            setError("co loi xay ra!!!");
        }
    }

    const editTodo = async (id) => {
        try {
          setLoading(true);
          await axios.put(`${URL}/${id}`, {
            title: valueTitle,
            isDone: valueIsDone
          });
        //   resetData();
          console.log('edittodo',valueIsDone, valueTitle);

          getListTodo();
        } catch (error) {
          setLoading(false);
          setError("Có lỗi xảy ra");
        }
      };
    const setTitleInput = (text) => {
        console.log('setTitleInput1',valueIsDone, valueTitle);

        setValueTitle(text.target.value);
        // setvalueIsDone(false);
        console.log('setTitleInput2',valueIsDone, valueTitle);

    }

    const changeDoneTodo = (item) => {
        // setvalueIsDone(event.target.checked);
        setvalueIsDone(!item.isDone);
        setValueTitle(item.title)
        editTodo(item.id);
        console.log('changedonetodo',valueIsDone, valueTitle);

    }

   
    // useEffect(() => {
    // }, [valueIsDone, valueTitle]);

    return (
        <div>
            <Header 
                handleKeyDown = {handleKeyDown}
                setTitleInput = {setTitleInput}
                loading = {loading}
                valueTitle = {valueTitle}
            />
            <Item
              todos = {todos}
              deleteToDo = {deleteToDo}
              valueTitle = {valueTitle}
              valueIsDone = {valueIsDone}
              setvalueIsDone = {setvalueIsDone}
              changeDoneTodo = {changeDoneTodo}
              editTodo = {editTodo}
              />

            {error && <p>{error}</p>}
            {loading ? <p>Loading...</p> : null}

        </div>
    );
}

export default TodoMain;