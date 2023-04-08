import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo")

  //   if(userInfo){
  //     history.pushState("/")
  //   }
  // }, [history])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Main />} />
      </Routes>

    </>
  );
}

export default App;
