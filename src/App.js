import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Porject from './components/Porject';
import Contact from './components/Contact';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
     <Navbar/>
     <div className='container'>
     <Home/>
     <Skills />
     <Porject/>
     <Contact/>
     
     </div>
  
    </>
  );
}

export default App;
