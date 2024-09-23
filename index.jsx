import React from 'react';
import ReactDOM from 'react-dom/client';
import Bingo from './components/Bingo/index'
import data from './data'

function App() {
  
  const values = Object.values(data)
  const Squares = values.map((value,index) => <Bingo.Square key={index} text={value} />)
  
  return (
    <>
      <h1>Kid Bingo</h1>
      <Bingo>
        {Squares}
      </Bingo>
      <button className="reset-btn" onClick={() => location. reload()}>Restart</button>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 