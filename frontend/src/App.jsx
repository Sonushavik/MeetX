import { useState } from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import HomeComponent from './pages/Home';
import Authentication from './pages/authentication'
import { AuthProvider } from './contexts/AuthContext'
import VideoMeet from './pages/VideoMeet'
import History from './pages/History';

function App() {

  return (
    <>
      <Router>
          <AuthProvider>
          <Routes>
              <Route path='/' element={<Landing/>}/>
              <Route path='/auth'  element={<Authentication/>}/>
              <Route path='/home'  element={<HomeComponent/>}/>
               <Route path='/history' element={<History />} />
              <Route path='/:url' element={<VideoMeet/>}/>
          </Routes>
          </AuthProvider>
      </Router>

    </>
  )
}

export default App
