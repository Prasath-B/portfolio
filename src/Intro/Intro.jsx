import React from 'react'
import "./Intro.css"

const Intro = () => {
  return (
    <div className='intro'>
      <div className='intro-details'>
      <p className='my-name'>Hi, my name is</p>
      <h1 data-aos="fade-right" className='title'>Prasath Balasubramani</h1>

      <h1 data-aos="fade-right" className='title'>I build things for the web</h1>

      <p data-aos="fade-left" className='my-desc'>I’m a software engineer specializing in building  exceptional digital experiences. Currently, I’m focused on mastering frontend side of web technologies  .</p>
      </div>
    </div>
  )
}

export default Intro