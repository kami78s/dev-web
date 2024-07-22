import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Service from './pages/Service'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
      </Routes>
    </Router>
  )
}

export default App
