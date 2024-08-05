import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Service from './pages/Service'
import Contact from './pages/Contact'

import LanguageContext from './context/languageContext'

import './App.css'

function App() {

  return (
    <Router>
      <LanguageContext>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fr' element={<Home />} />
        <Route path='/en' element={<Home />} />
        <Route path='/fr/service' element={<Service />} />
        <Route path='/en/service' element={<Service />} />
        <Route path="/fr/contact" element={<Contact />} />
        <Route path="/en/contact" element={<Contact />} />
      </Routes>
      </LanguageContext>
    </Router>
  )
}

export default App
