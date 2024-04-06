import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>子应用👇</h1> 
        <micro-app name='my-app' url='http://localhost:8080/' iframe></micro-app>
      </div>
    </>
  )
}

export default App
