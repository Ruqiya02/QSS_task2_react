import React from 'react'
import './Textboxes.css'

function Textboxes() {
  return (
    <div className='boxes'>
       <div className='box'>
        <p>1</p>
        <div className='content'>
          <p>Our system evaluates your skills across various stages, starting with education level, 
            language proficiency, special talents, software knowledge, work experience, and more.</p>
            <img src="/img/Group.svg" alt="" />
        </div>
       </div>
       <div className='box'>
        <p>2</p>
        <div className='content'>
          <p>By comparing you with people of
            the same age group, our system provides accurate results on your performance, highlighting your strengths and weaknesses. </p>
            <img src="/img/Group2.svg" alt="" />
        </div>
       </div>
       <div className='box'>
        <p>3</p>
        <div className='content'>
          <p>By comparing you with people of the same age group, 
            our system provides accurate results on your performance, highlighting your strengths and weaknesses. </p>
            <img src="/img/Group3.svg" alt="" />
        </div>
       </div>
    </div>
  )
}

export default Textboxes
