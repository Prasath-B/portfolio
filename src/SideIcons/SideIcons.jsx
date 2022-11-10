import React from 'react'
import "./SideIcons.css"
const SideIcons = () => {
  return (
    <div className='side-comp' data-aos="fade-up"
    data-aos-duration="3000">
        <div className='side-icons'>
        
        <a href="https://www.linkedin.com/in/prasath-b-0919961b3"><i style={{color:"gray"}} class="fa-brands fa-lg  fa-linkedin"></i></a>
        <a href="https://github.com/Prasath-B"><i style={{color:"gray"}} class="fa-brands fa-lg  fa-github"></i></a>
        <a href="mailto:prasathbalasubramani30@gmail.com"><i style={{color:"gray"}} class="fa-solid  fa-lg fa-envelope"></i></a>
        <a href="https://www.instagram.com/prasath._._/"><i style={{color:"gray"}} class="fa-brands fa-lg  fa-instagram"></i></a>

        
        </div>
        
        <div className='vl'>

        </div>
    </div>
  )
}

export default SideIcons