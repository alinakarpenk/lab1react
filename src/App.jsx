import { useState } from 'react'


import './App.css'
import { Chessboard } from './components/Chessboard'

function App() {

  return (
    <>
      <h1 className='chessboard'>Welcome to little chess kingdom!!!</h1>
      <Chessboard />
    </>
  )
}

export default App
