import React from 'react'
import "./WorkSample.css"

const WorkSample = () => {
  return (
    <div className='work-samples'>
         <div className="about-title">
        <h1 className='ws-title'>Work Samples</h1> 
        <span className='hr-line'></span>
        </div>
        <div className='ws-projects'>
            <div className='ws-sin-project' data-aos="fade-up"
     data-aos-duration="1000">
                <div className='ws-proj-img'>
                   <a href="https://ttwitter.netlify.app/"><img src={`twitter.png`} alt="" /></a> 
                </div>
                <div style={{textAlign:"left"}}>
                    <p>Featured Project</p>
                    <p className='proj-title'>Twitter clone</p>
                    <div className='ws-proj-desc'>
                    This a Blogging website where people can share stuffs such as photos,gifs,information etc...
                     User can also conduct a poll where every other user can vote. 
                     The UI is inspired from twitter.com.
                    </div>
                    <ul className='proj-stacks'>
                        <li>React js</li>
                        <li>Firebase</li>
                        <li>netlify</li>
                    </ul>
                </div>
            </div>
            <div className='ws-sin-project-rev' 
            data-aos="fade-up"
            data-aos-duration="1500">
                <div className='ws-proj-img'>
                   <a href="https://projectest.netlify.app/"><img src={`Arctic.png`} alt="" /></a> 
                </div>
                <div>
                    <p>Featured Project</p>
                    <p className='proj-title'>Arctic devs</p>
                    <div className='ws-proj-desc'>
                    This a an website for an it consultancy and solution startup.
                    The main focus is the UI and animations.
                    </div>
                    <ul className='proj-stacks'>
                        <li>React js</li>
                        <li>netlify</li>
                    </ul>
                </div>
            </div>

            <div className='ws-sin-project'
            data-aos="fade-up"
            data-aos-duration="2000">
                <div className='ws-proj-img'>
                    <a href="https://soleras.netlify.app/"><img src={`Soleras.png`} alt="" /></a>
                </div>
                <div style={{textAlign:"left"}}>
                    <p>Featured Project</p>
                    <p className='proj-title'>Soleras</p>
                    <div className='ws-proj-desc'>
                    This is an website for an pharmaceutical company which mainly focus skin care and hygiene.
                    This website is a clone of original one(Aesop).
                    </div>
                    <ul className='proj-stacks'>
                        <li>React js</li>
                        <li>Firebase</li>
                        <li>netlify</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WorkSample