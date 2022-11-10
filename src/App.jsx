import React,{useState,useEffect} from 'react'
import Navbar from './Navbar/Navbar'
import "./App.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Intro from './Intro/Intro';
import SideIcons from './SideIcons/SideIcons';
import About from './About/About';
import WorkSample from './WorkSamples/WorkSample';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import GetInTouch from './GetInTouch/GetInTouch';


const App = () => {
  const [preview, setpreview] = useState(true)
  useEffect(() => {
   setTimeout(()=>{
      setpreview(false)
   },1800)
   AOS.init();
  }, [])

  
  return (
    <>
    {preview ? <div className='video'>
      <video muted autoPlay>
        <source src={`P.mp4`}  type="video/mp4"/>
      </video>
    </div>  : 
    <div className='container-wrap'>
      <Navbar />
      <Intro />
      <SideIcons />
      <About />
      <Skills />
      <WorkSample />
      <Experience />
      <GetInTouch />
    </div>  }
    
    </>
  )
}

export default App