import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Connect from './components/Connect'
import { MSection } from "./components/ScrollMotion";

import './App.css'

function App() {

  return (
    <main className='flex flex-col'>
    <MSection id="home">
      <Hero />
    </MSection>
      <MSection id='about'>
        <About />
      </MSection>
      <div id='project'>
        <Project />
      </div>
      <div id='connect'>
        <Connect />
      </div>
      

    
    </main>
  )
}

export default App
