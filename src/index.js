import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Adduser from './components/Emmi/Adduser'
import Getusers from './components/Emmi/Getusers'
import Courses from './components/Axel/Courses';
import Enroll from './components/Emmi/Enroll';
import PageNotFound from './components/Emmi/PageNotFound';
import Blog from './components/Emmi/Blogg/Blog';
import Programs from './components/Markus/Programs';


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/adduser' element={<Adduser/>} />
    <Route path='/getusers' element={<Getusers/>} />
    <Route path='/courses' element={<Courses/>} />
    <Route path='/programs' element={<Programs/>} />
    <Route path='/enroll' element={<Enroll/>} />
    <Route path='/blog' element={<Blog/>} />
    <Route path="*" element={<PageNotFound/>} />
  </Routes>
  <Footer />
</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
