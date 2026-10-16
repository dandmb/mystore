import { useState } from 'react'
import './App.css'
import Header from './Components/Header';
import Home from './components/Home';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home/>
      <Footer />
    </>
  );
}

export default App
