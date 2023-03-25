import React, {useState, useEffect} from 'react';
import axios from "axios";
import Header from './Header';
import Item from './Item';
import Toast from 'react-bootstrap/Toast';

const URL = "https://64170268205bdf0a1d7e0d5f.mockapi.io/Todo";
function TodoMain() {
    const [todos, setTodos] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [valueTitle, setValueTitle] = useState("");
    const [valueIsDone, setvalueIsDone] = useState(false);
    const [todoDelete, setodoDelete] = useState([]);

    const TODO = {
        active: 'Active',
        completed: 'Completed',
        all: 'Show all',
        clearCompleted: 'Clear completed'
    };
    const [action, setAction] = useState(TODO.all);
    
    useEffect(() => {
        getListTodo();
    }, []);

    useEffect(() => {
        
    }, [valueTitle]);

    const handleKeyDown = (event) => {
        setvalueIsDone(false);
        if(event.keyCode===13) {
            addTodo();
        }
    };
    const setTitleInput = (text) => {
        console.log('setTitleInput1',valueIsDone, valueTitle);

        setValueTitle(text.target.value);
        // setvalueIsDone(false);
        console.log('setTitleInput2',valueIsDone, valueTitle);

    };


    const resetData  = () => {
        setLoading(false);
        
        // setvalueIsDone(false);
        // setValueTitle("");
        getListTodo();
        setError("");
        console.log('resetData',valueIsDone, valueTitle);
      };

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
            resetData();
        } catch (error) {
            setLoading(false);
            setError("co loi xay ra!!!");
        }
    }

    const editTodo = async (id, item) => {
        try {
          setLoading(true);
          await axios.put(`${URL}/${id}`, {
            title: item.title,
            isDone: !item.isDone
          });
        //   resetData();
          console.log('edittodo',valueIsDone, valueTitle);

          getListTodo();
        } catch (error) {
          setLoading(false);
          setError("Có lỗi xảy ra");
        }
      };

    const changeDoneTodo = (e, item) => {
        // setvalueIsDone(event.target.checked);
        console.log('====================================');
        console.log(e.target.checked);
        console.log(item);
        console.log('====================================');
        setvalueIsDone(!item.isDone);

        setValueTitle(item.title)
        console.log('changedonetodo1',valueIsDone, valueTitle);

        editTodo(item.id, item);
        console.log('changedonetodo2',valueIsDone, valueTitle);

    }

    const active = () => {
        setAction(TODO.active);
        console.log('====================================');
        console.log(action);
        console.log('====================================');
        // if(todos) {
        //     todos.map((item, index) => {
        //         item.filter(filterActive=> item.isDone==false)
        //     });
        // }
    };

    const clearCompleted = () => {
        setAction(TODO.clearCompleted);
        setodoDelete([]);
        console.log('====================================');
        console.log(action);
        console.log('====================================');
        // const [todoDelete, setodoDelete] = useState([]);
        if(todos!=null) {
             todos.filter((item) => {
                 if(item.isDone==true) {
                    console.log('====================================');
                    console.log(item);
                    console.log('====================================');
                    //  deleteToDo(item.id);
                    setodoDelete(old => [...old, item]);
                }
                // getListTodo();
            });
            // settodoDelete(todos.filter(item => {
            //     return item.isDone===true;
            // }));
        }
        // console.log('====================================');
        console.log('todoDelete', todoDelete);
        // console.log('====================================');
        if(todoDelete.length>0) {
            todoDelete.forEach(item => {
                deleteToDo(item.id);
                // getListTodo();
            });
        } 
       
    };

    const completed = () => {
        setAction(TODO.completed);
        console.log('====================================');
        console.log(action);
        console.log('====================================');
       
    };

    const showAll = () => {
        setAction(TODO.all);
        console.log('====================================');
        console.log(action);
        console.log('====================================');
        
    };
    

   
    // useEffect(() => {
    // }, [valueIsDone, valueTitle]);

    return (
        <div>
            {/* <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast> */}
            <Header 
                handleKeyDown = {handleKeyDown}
                setTitleInput = {setTitleInput}
                valueTitle = {valueTitle}
                active = {active}
                action = {action}
                clearCompleted ={clearCompleted}
                showAll = {showAll}
                completed = {completed}
            />
            <Item
                todos = {todos}
                deleteToDo = {deleteToDo}
                valueTitle = {valueTitle}
                valueIsDone = {valueIsDone}
                setvalueIsDone = {setvalueIsDone}
                changeDoneTodo = {changeDoneTodo}
                editTodo = {editTodo}
                active = {active}
                action = {action}
                TODO = {TODO}
                clearCompleted ={clearCompleted}

              />

            {error && <p>{error}</p>}
            {loading ? <p>Loading...</p> : null}

        </div>
    );
}

export default TodoMain;