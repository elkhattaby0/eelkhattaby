import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Pages/Header';
import Home from './Pages/Header/Home';
import About from './Pages/Header/About';
import Project from './Pages/Header/Project';
import ProjectDetails from './Pages/Header/ProjectDetails';
import Blog from './Pages/Header/Blog';
import BlogDetails from './Pages/Header/BlogDetails';
import Contact from './Pages/Header/Contact';


const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='project' element={<Project /> } />
          <Route path='project_details' element={<ProjectDetails /> } />
          <Route path='blog' element={<Blog /> } />
          <Route path='blog_details' element={<BlogDetails /> } />
          <Route path='contact' element={<Contact /> } />
        </Route>        
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
