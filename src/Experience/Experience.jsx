import React, { useState } from 'react'
import "./Experience.css"
import { data } from './data';

const Experience = () => {
  const [one, setone] = useState(true)

  return (
    <div className='expr' id='experience'>

        <div className="about-title">
        <h1 className='exp-title'>Where I've Worked</h1> 
        <span className='hr-line'></span>
        </div>

        <div className="expr-wrap">
        <div style={{textAlign:"left"}}>
            <ul className='expr-left'>
                <li className={one ?  'active' : null} onClick={()=>setone(true)} >TVAST It Solutions</li>  
                <li className={one ? null : "active"} onClick={()=>setone(false)} >Arctic Devs</li>   
            </ul>
        </div>
            {one ?   
                <div >
                <p><i className='bold'>{data[1].role} <i className='purple'>@{data[1].company}</i></i></p>
                <i style={{color:"gray"}}>{data[1].time}</i>
                <ul className='point-ul'>
                    {data[1].points.map((ele)=><li>{ele}</li>)}
                </ul>
            </div> :
            <div>
            <p> <i className='bold'>{data[0].role} <i className='purple'>@{data[0].company}</i></i></p>
            <i style={{color:"gray"}}>{data[0].time}</i>
            <ul className='point-ul'>
                {data[0].points.map((ele)=><li>{ele}</li>)}
            </ul>
        </div>
             
          }
        </div>
        
    </div>
  )
}

export default Experience;