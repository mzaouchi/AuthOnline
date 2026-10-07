import './App.css';
import Home from './Components/Home';
import NavAuth from './Components/NavAuth';
import {Route, Routes} from 'react-router-dom'
import Register from './Components/Register';
import Login from './Components/Login';
import Profile from './Components/Profile';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <div>
      <NavAuth/>

      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Profile' element={<PrivateRoute><Profile/></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
