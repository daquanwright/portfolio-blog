import React from 'react';
import './App.css';
import './index.css';
import './responsive.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
        <div className='App'>
          <Navigation/>

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Portfolio' element={<Portfolio/>} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/About' element={<About/>} />
            <Route path='/Contact' element={<Contact/>} />
          </Routes>
          
          <Footer/>
        </div>
    );
  }
}

export default App;