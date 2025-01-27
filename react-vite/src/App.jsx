import {useEffect, useState} from "react"

import './App.css'

import Top from "./components/top/Top"
import Intro from "./components/intro/Intro"
import Cards from './components/cards/Cards'
import TechStack from "./components/tech-stack/TechStack"
import Appeal from "./components/appeal/Appeal"
import AboutMe from "./components/about-me/AboutMe"
import Footer from "./components/footer/Footer"
import Load from "./components/load/Load"


function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <>
      {
        isLoading ? <Load /> :
        <div className="app-container">
          <Top />
          <Intro />
          <Cards />
          <TechStack />
          <Appeal />
          <AboutMe />
          <Footer />
        </div>
      }
    </>
  )
}

export default App
