import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
        <h1>About me</h1> 
        <span style={{width:"200px",height:"2px",background:"#6D83F2",display:"inline"}}></span>
        </div>
        <div className='about-d' data-aos="fade-up"
     data-aos-duration="1500">
            <div className='about-content' >
                <p>Hello! My name is <span className='hl-text'>Prasath</span>  and I enjoy creating things that live on the internet. 
                  My interest in web development started back in 2020 when I decided to have my own website where everyone can know me  through internet. Which lead me to learn HTML and CSS!</p>

                  <p>Fast-forward to today, and I’ve had the privilege of working with couple of startups in <span className='hl-text'>building and shipping products for real-world businesses. </span> 
                   Also, I do have a bachelors in computer science</p>

                   <p>Currently, I am focused on  expanding my knowledge on web technologies.Still have a lot to learn. I hope it will be a <span className='hl-text'>exciting journey</span> </p>
            </div>
            <div className='about-img'>
                <img src={`me2.png`} alt="me" />
            </div>
        </div>
    </div>
  )
}

export default About