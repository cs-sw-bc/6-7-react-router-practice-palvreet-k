import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Build from './pages/Build'
import CountryDetail from './pages/CountryDetail'
import Home from './pages/Home'
import Mobile from './pages/Mobile'
import Web from './pages/Web'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryDetail />} />
          <Route path="/build" element={<Build />}>
            <Route path="web" element={<Web />} />
            <Route path="mobile" element={<Mobile />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  )
}

export default App
