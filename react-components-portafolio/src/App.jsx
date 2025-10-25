import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'



import './App.css'

function App() {

  return (
    <> {/*Fragment*/}
        <Header />

      <main>
        <AboutMe />
        <Projects />
      </main>
    </>
  )
}

export default App