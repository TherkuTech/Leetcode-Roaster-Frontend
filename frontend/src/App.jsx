import { useState } from 'react'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home'
import DashboardLayout from './Layouts/DashboardLayout'
import './App.css'

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
