import React,{useState} from 'react'
import "./Navbar.css"

const Navbar = () => {
  const [active, setactive] = useState(false)
  console.log(active)
  return (
    <div className='navbar' data-aos="fade-down">
        <div className='navbar-img'><img src={`logo.png`} alt="logo" /></div>
        <div >
         {active ?  <i className="fa-solid fa-2x fa-xmark ham" onClick={()=>setactive(!active)} ></i>  :  
         <i className="fa-solid fa-2x fa-bars ham" onClick={()=>setactive(!active) } ></i> 
         }
            <ul className={`navbar-links ${ active ? 'mob-nav-links' : null}`}>
                <a href="#about"><li>About</li></a>
                <a href="#skills"><li>Skills</li></a>
                <a href="#works"><li>Work Samples</li></a>
                <a href="#experience"><li>Experience</li></a>
                
                <a href="#contact"><li>Contact me</li></a>

                <a href={`Prasath_Resume.pdf`} download><li style={{background:"#6D83F2",color:"white"}}>Resume</li> </a>
                <li>
                  {
                    active ? <div className='a-links'>
        
                    <a href="https://www.linkedin.com/in/prasath-b-0919961b3"><i style={{color:"gray"}} class="fa-brands fa-lg  fa-linkedin"></i></a>
                    <a href="https://github.com/Prasath-B"><i style={{color:"gray"}} class="fa-brands fa-lg  fa-github"></i></a>
                    <a href="mailto:prasathbalasubramani30@gmail.com"><i style={{color:"gray"}} class="fa-solid  fa-lg fa-envelope"></i></a>
                    <a href="https://www.instagram.com/prasath._._/"><i style={{color:"gray"}} class="fa-brands fa-lg  fa-instagram"></i></a>
            
                    
                    </div> :
                    null
                  }
                </li>
            </ul>
            
        </div>
    </div>
  )
}

export default Navbar