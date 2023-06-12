import { useState } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Textboxes from './components/Textboxes'
import Container from './components/Container'
import Footer from './components/Footer'
import './App.css'

function App() {
    return <div>
        <Navbar/>
        <LandingPage />
        <Textboxes />
        <Container/>
        <Footer/>
    </div>
}

export default App
