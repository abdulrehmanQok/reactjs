
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Form from './components/Form';
import Home from './components/Home'
// import Todo from './components/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react'
  import 'react-toastify/dist/ReactToastify.css';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Signup from './auth/Signup';
import Login from './auth/Login';
import { Toast } from 'bootstrap';
import Product from './pages/Product';

const  App=()=> {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Form' element={<Form/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Product' element={<Product/>}></Route>

      </Routes>
      <ToastContainer/>


    </div>
  )
}

export default App
