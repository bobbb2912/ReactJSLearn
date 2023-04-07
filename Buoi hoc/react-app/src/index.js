import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux_test/store';
///
import Parent from './copyRandomProject/components/learn/Parent1';
import TodoMain from './todoProject/components/TodoMain';
import Post from './redux_test/components/Post';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostDetail from './redux_test/components/PostDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/todo",
    element: <TodoMain/>,
  },
  {
    path: "/parent",
    element: <Parent/>,
  },
  {
    path: "/post",
    element: <Post/>,
  },
  {
    path: "/post/:idpost/:name",
    element: <PostDetail/>,
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
