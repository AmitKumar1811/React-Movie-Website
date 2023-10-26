import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Footer from './components/Footer';
import SingleMovie from './components/SingleMovie';
import ViewMovie from './components/ViewMovie';
import DailyModal from './components/Daily_Modal';
const App = () => 
{

  return (
    <BrowserRouter>
    <div className='App'>
    <Navbar/>
    <DailyModal/>
    <Routes>
    <Route index element={<Movies/>} />
    <Route path='/movie/:id' element={<SingleMovie />} />
    <Route path='/movie_all/:type' element={<ViewMovie />} />
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
   
  )
}

export default App
