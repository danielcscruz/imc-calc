import { use, useState } from 'react'
import './App.css'
import Display from './Components/Display'

function App() {
  const [imc , setIMC] = useState()

  return (
    <>
      <div>
        <div className="container">
        <Display  />
        </div>
        <h5> check this project repository on:</h5>
        <a href="https://github.com/danielcscruz/imc-calc">
        <img style={{ height: '40px', width: '40px', marginTop: '10px', cursor: 'pointer' }} src='https://raw.githubusercontent.com/danielcscruz/estaticos/c0b6ffb51ff14066a8f3428f18993ee52418eed5/assets/github.svg' alt="github"/></a>

      </div>
    </>
  )
}

export default App
