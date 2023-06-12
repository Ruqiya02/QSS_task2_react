import React from 'react'
import "./LandingPage.css"

function LandingPage() {
  return (
    <div className='landing_area'>
        <div id='bg_opocity'>
            <div className='intro'>
                <h1>Welcome to our Talent <span>Scoring</span> system! </h1>
                <p>Welcome to our talent scoring system - a comprehensive tool, designed for comparing individuals with others in their age group. </p>
            </div>
                <img src="./public/img/Frame.svg"/>
                </div>
        <div className='get_start'>
                <p>You can get score now</p>
                <button>Get started</button>
        </div>
        <img src="./public/img/arrow1.svg" alt="" />
    </div>
  )
}

export default LandingPage
