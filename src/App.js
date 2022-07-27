import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Website from './Website';
import DataResponseData from './custom/dataresponseData';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Website/>}/>
        <Route path='/dataResponseData' element={<DataResponseData/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
