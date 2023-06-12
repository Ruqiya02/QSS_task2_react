import React from 'react'
import "./Container.css"

function Container() {
  return (
    <div className='containers_area'>
      <h2>Talent score </h2>
      <p>4 easy steps to get successful in your career using our certification system</p>
      <div className='container_box'>
        <div className='container'>
            <h2>Registration</h2>
            <img src="/img/Frame2.svg" alt="" />
            <p>Complete registration filing your personal info/</p>
        </div>
        <div className='container'>
            <h2>Testing</h2>
            <img src="/img/Frame3.svg" alt="" />
            <p>The test consist of 6 stages</p>
        </div>
        <div className='container'>
            <h2>Report</h2>
            <img src="/img/Frame4.svg" alt="" />
            <p>Get your report verified by our system.</p>
        </div>
        <div className='container'>
            <h2>ChatBot</h2>
            <img src="/img/Frame5.svg" alt="" />
            <p>Based on your testing result get special insights for you career </p>
        </div>
      </div>
      <button>Get Started</button>
    </div>
  )
}

export default Container
