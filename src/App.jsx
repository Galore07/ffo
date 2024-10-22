import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Container/NavBar';
import HeroSection from './Component/HeroSection';
import Center from './Component/Center';
import Middle from './Component/Middle';
import Main from './MainContent/Main';
import ProductDetails from './MainContent/ProductDetails';
import Footer from './Container/Footer';
import ContactPage from './Pages/ContactPage';
import Enhancement from './EnhancementPd/Enhancement';
import Bags from './MainContent/Bags';
import HandBags from './BagsPd/HandBags';
import Featured from './FeaturedPd/Featured';
import ProductInfos from './BagsPd/ProductInfos';
import Cart from './Component/Cart';


const App = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className='container'>
        <NavBar toggleCart={() => setCartOpen(true)} />
          
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Middle />
              <Main />
              <Bags />
              <Center />
            </>
          } />
          <Route path="/featured" element={<Featured />} />
          <Route path="/hand-bags" element={<HandBags />} />
          <Route path="/enhancement-products" element={<Enhancement />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product-info/:id" element={<ProductInfos />} />
        </Routes>
        <Footer />

        {/* display cart modal if open */}
       {cartOpen && (
        <Cart onClose={() => setCartOpen(false)} />
       )}
      </div>
    </BrowserRouter>
  );
};

export default App;