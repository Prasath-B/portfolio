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
                <li>About</li>
                <li>Experience</li>
                <li>Work Samples</li>
                <li>Contact me</li>
                <li style={{background:"#6D83F2",color:"white"}}>Resume</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar