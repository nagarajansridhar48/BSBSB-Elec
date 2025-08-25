import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home_main from './pages/Home/Home_main';
import About_main from './pages/About/About_main';
import Products_main from './pages/Products/Products_main'
import NotFound from './pages/Not_found'
import Contact_main from './pages/Contact/Contact_main'
import Main_Landing from './pages/Main_Landing';

function App() {

  return (
    <>
      {/* <Router> */}
        <Routes>
          <Route path='/' element={<Main_Landing />}>
            <Route index element={<Home_main/>} />
            <Route path='/about' element={<About_main />} />
            <Route path='/products' element={<Products_main />} />
            <Route path='/contact' element={<Contact_main/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      
      {/* </Router> */}
    </>
  )
}

export default App
