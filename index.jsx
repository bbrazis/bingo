import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router-dom'
import Bingo from './components/Bingo/index'
import data from './data'
import Home from './pages/Home'
import Suggestions from './pages/suggestions'

function App() {
  
  const values = Object.values(data)
  const Squares = values.map((value,index) => <Bingo.Square key={index} text={value} />)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' >
          <Route index element={<Home />} />
          <Route path='suggestions' element={<Suggestions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)