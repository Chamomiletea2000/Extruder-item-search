import React, { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import './App.css'

const App=() => {

  return (
    <div className='container-fluid mx-auto position-absolute top-0 start-0'>
        <Header/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default App
