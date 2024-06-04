import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
import GunDetails from './page/GunDetails'
import EditGunDetails from './page/EditGunDetails'
import AllGunsPage from './page/AllGunsPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/weapons" element={<AllGunsPage/>}/>
      <Route path="/weapons/:weaponId" element={<GunDetails/>}/>
      <Route path="/edit/:weaponid" element={<EditGunDetails/>}/>
    </Routes>
      <Footer/>
      </div>
    </>
  )
}

export default App
