import React from 'react'
import Header from './components/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
    <Header/>
<Routes>
<Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact/>} />
</Routes>
<Footer/>
    </Router>
  )
}

export default App