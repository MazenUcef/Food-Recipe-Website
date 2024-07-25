import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Details from './pages/Details'



const App = () => {
  return (
    <div className='min-h-screen text-gray-400 text-xl'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/recipe-item/:id' element={<Details />} />
      </Routes>
    </div>
  )
}

export default App