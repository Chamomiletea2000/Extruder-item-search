import React, { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import './App.css'

const App=() => {

  return (
    <div className='container-fluid mx-auto position-absolute top-0 start-0 h-100'>
        <Header/>
        <Body/>
        <Footer/>
    </div>
  )
}

export default App
