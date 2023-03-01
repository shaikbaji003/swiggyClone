import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import App from './App';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import OrderDetail from './pages/OrderDetail';
import Cart from './pages/Cart';
import Productdetails from './components/Productdetails';
import Navbar from './components/header/Navigation';
import ErrorPage from './pages/Errorpage';



ReactDOM.render(
  <Router>
    <Navbar/>
    {/* <Switch> */}
    <Routes>
<Route exact path='/' element={ <App />}/>
<Route exact path='/about' element={ <About />}/>
<Route exact path='/contact' element={ <Contact />}/>
<Route exact path='/orderdetails' element={ <OrderDetail />}/>
<Route exact path='/cart' element={ <Cart />}/>
<Route exact path='/productdetails/:productId' element={ <Productdetails />}/>
<Route exact path="*" element={<ErrorPage/>} />

</Routes>

{/* </Switch> */}
  </Router>,
  document.getElementById('root')
);
