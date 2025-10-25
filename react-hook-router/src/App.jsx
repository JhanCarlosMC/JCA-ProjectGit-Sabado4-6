import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'

import "./App.css"

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        {/* Navbar de navegación */}
        <nav className="navbar">
          <div className="nav-brand">Mi App</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </BrowserRouter>  
  )
}

export default App
