import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Container/NavBar';
import HeroSection from './Component/HeroSection';
import Center from './Component/Center';
import Middle from './Component/Middle';
import Main from './MainContent/Main';
import ProductDetails from './MainContent/ProductDetails';
import Footer from './Container/Footer';
import ContactPage from './Pages/ContactPage';


const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <NavBar />
        <Routes>
        <Route path="/" element={
            <>
              <HeroSection />
              <Middle />
              <Main />
              <Center />
            </>
          } />
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App