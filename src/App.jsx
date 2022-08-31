import React from 'react'
import Info from './components/Info'
import About from './components/About'
import Interest from './components/Interest'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}
