import './App.css'

import Top from "./components/top/Top"
import Intro from "./components/intro/Intro"
import Cards from './components/cards/Cards'
import TechStack from "./components/tech-stack/TechStack"
import Appeal from "./components/appeal/Appeal"
import AboutMe from "./components/about-me/AboutMe"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
      <div>
        <Top />
        <Intro />
        <Cards />
        <TechStack />
        <Appeal />
        <AboutMe />
        <Footer />
      </div>
    </>
  )
}

export default App
