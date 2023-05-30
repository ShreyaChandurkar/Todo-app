
import './App.css';

// components
import TodoForm from './components/TodoForm';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login';
import Register from './component/Register'
import Home from './component/Home';
import Error404 from './component/Error404';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/loginUser' element={<Login />} />
        <Route path='/registerUser' element={<Register />} />
        <Route path='/todoform' element={<TodoForm />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
 
     
     
    </div>
  );
}

export default App;