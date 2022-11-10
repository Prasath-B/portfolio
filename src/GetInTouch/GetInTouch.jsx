import React from 'react'
import "./GetInTouch.css"

const GetInTouch = () => {
  return (
    <div className='contact'>
        <div className="about-title">
        <h1 className='exp-title'>Get In Touch</h1> 
        <span className='hr-line'></span>
        </div>
        <div className='contact-desc'>
        My inbox is always open. Whether you have a question  or work related collabration or just want to say hi, 
        feel free to do so, I’ll try my best to get back to you!
        </div>
        <a href="mailto:prasathbalasubramani30@gmail.com" className='contact-btn'>Say hello!</a>
    </div>
  )
}

export default GetInTouch