import { useState } from 'react'
import './App.css'
import Top from "./components/top/Top"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Top />
      </div>
    </>
  )
}

export default App
