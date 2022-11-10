import React from 'react'
import "./Skills.css"

const Skills = () => {
  return (<>
        
    <div className='skills' id='skills'>
    <div className="about-title">
        <h1 className='skills-title'  >My Skills</h1> 
        <span className='hr-line'></span>
        </div>
        <div style={{width:"100%",height:"100%"}}>
            <div className='skill-list'>
                <img data-aos="flip-right" src={`html.png`} style={{color:"#6D83F2"}} alt="" />
                <img data-aos="flip-right" src={`js.png`} style={{color:"#6D83F2"}} alt="" />
                <img data-aos="flip-right" src={`reactjs.png`} style={{color:"#6D83F2"}} alt="" />
                <img data-aos="flip-right" src={`nodejs.png`} style={{color:"#6D83F2"}} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Skills