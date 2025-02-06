import { use, useState } from 'react'
import './App.css'
import Display from './Components/Display'

function App() {
  const [count, setCount] = useState(0)
  const [imc , setIMC] = useState()

  return (
    <>
      <div>
        <div className="container">
        <Display  />
        </div>
        <h5> check this project repository on:</h5>
        <a href="https://github.com/danielcscruz/imc-calc">
        <img style={{ height: '40px', width: '40px', marginTop: '10px', cursor: 'pointer' }} src='./src/assets/github.svg' alt="github"/></a>

      </div>
    </>
  )
}

export default App
