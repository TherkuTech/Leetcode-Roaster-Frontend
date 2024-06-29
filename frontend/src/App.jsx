import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/index.jsx'
import DashboardLayout from './Layouts/DashboardLayout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Routes>
        <Route path="/" element={
          <DashboardLayout>
            <Home/>
          </DashboardLayout>
        } />
      </Routes>
        
    </>
  )
}

export default App
