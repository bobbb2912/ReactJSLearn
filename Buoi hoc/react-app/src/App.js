import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

  // import RandomProject from './randomProject/main';

// import Main from './showFooter/components/Main';
// import RandomImage from './randomImageProject/Components/Main';
// import CartItem from './randomProject/components/learn/CartItem';
// import Parent from './randomProject/components/learn/Parent1';
// import CopyRandomProject from './copyRandomProject/main';
// import Home from './todoApp/components/index';
// import TodoMain from './todoProject/components/TodoMain';
import WeatherMap from './WeatherMap/component/main';
// import ReduxTestApp from "./redux_test";
import ReduxApp from './redux_test/index';
import Counter from './redux_test/components/Counter';
import Post from './redux_test/components/Post';
import {useNavigate, Link} from 'react-router-dom';
import Menu from './Menu';

function App() {
  const navigate = useNavigate();

  return (
    <div>
       <Menu/>
    </div>
   
  );
}

export default App;
