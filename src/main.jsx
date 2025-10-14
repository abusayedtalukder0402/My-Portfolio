import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';

import Contact from './component/Contact';
import Services from './component/Services.jsx'
import ErrorPage from './component/ErrorPage.jsx'
{/* authentication 
import Register from './component/Register';
import Login from './component/Login';*/}

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <Routes>
     <Route element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Route>
    
    {/* authentication 

      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      */}
    </Routes>
  </BrowserRouter>,
)
