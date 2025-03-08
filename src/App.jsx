import React from 'react'
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Footer from './pages/Footer';
import Home from './pages/Home.jsx'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Product from './pages/Product.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
          <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/Product' element={<Product/>}></Route>
          </Routes>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
