import React, { useEffect } from 'react'
import Welcome from './components/Welcome';
import Other from './components/Other';
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
      <Navbar/>
      <Login/>
      <Register/>
      <Welcome />
      <Other />
    </>
  );
}

export default App;
