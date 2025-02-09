import { useState } from 'react'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import "./App.css"
import Homepage from './pages/Homepage/Homepage'
import Dashboard from './pages/Dashboard/Dashboard'
import Collaborators from './pages/Collaborators/Collaborators'

function App() {

  return (
    <div className='main-app'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/collaborators' element={<Collaborators />} />
          <Route path='*' element={<><h1>404 Page Not Found</h1></>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
