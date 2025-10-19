
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './component/Navbar'
import About from './component/About';
import Services from './component/Services';
import Skills from './component/Skills';
import Contact from './component/Contact';

function App() {
 

  return (
    <>
  <Navbar/>
      <Outlet/>
      <About/>
      <Services/>
      <Skills/>
      <Contact/>
      
      
    </>
  )
}

export default App
