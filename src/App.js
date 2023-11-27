import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './component/Home'
import Products from './component/Products'
import Contact from './component/Contact'
import About from './component/About'
import Singleproduct from './component/Singleproduct';
import Cart from './component/Cart';
import Error from './component/Error';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
        <Routes>
            <Route path ="/" element={<Home/>} />
            <Route path ="/home" element={<Home/>} />
            <Route path ="/products" element={<Products/>} />
            <Route path ="/contact" element={<Contact/>} />
            <Route path ="/about" element={<About/>}/>
            <Route path='/singleproduct/:id' element={<Singleproduct/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default App