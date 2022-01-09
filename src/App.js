import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Footer from './components/Footer'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        {/* switch is changed to routes in react update */}
        
        <Route exact path="/"  element={<Home/>} />
        <Route exact path="/menu"  element={<Menu/>} />
        <Route exact path="/about"  element={<About/>} />
        <Route exact path="/contact"  element={<Contact/>} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  )
}

export default App
