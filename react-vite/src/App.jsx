import './App.css'

import Top from "./components/top/Top"
import Intro from "./components/intro/Intro"
import Cards from './components/cards/Cards'
import TechStack from "./components/tech-stack/TechStack"

function App() {

  return (
    <>
      <div>
        <Top />
        <Intro />
        <Cards />
        <TechStack />
      </div>
    </>
  )
}

export default App
