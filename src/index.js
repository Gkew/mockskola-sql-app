import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Adduser from './components/Emmi/Adduser'
import Getusers from './components/Emmi/Getusers'

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/adduser' element={<Adduser/>} />
    <Route path='/getusers' element={<Getusers/>} />
  </Routes>
</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
