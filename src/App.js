import logo from './logo.svg';
import './App.css';
import './Navbar.js'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar.js';
import Sidebar from './Sidebar';
import Validation from './Validation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Products';

function App() {
  return (
    <BrowserRouter>
<div class="sb-nav-fixed">
    <Navbar></Navbar>
    <div id="layoutSidenav">
    <Sidebar></Sidebar>
    
    <Routes>
      <Route path='/' element={<Validation/>}></Route>
      <Route path='/Validation' element={<Validation/>}></Route>
      <Route path='/Products' element={<Products/>}></Route>
    </Routes>
    </div>
  </div>
  </BrowserRouter>
  );
}

export default App;
