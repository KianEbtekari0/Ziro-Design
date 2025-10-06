import { Routes, Route } from 'react-router';
import { useEffect } from 'react';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import AllProjects from './pages/AllProjects';
import Shop from './pages/Shop';
import gsap from 'gsap';
import Products from './pages/Products';
import ScrollSmoother from 'gsap/ScrollSmoother';
import './index.css';

gsap.registerPlugin(ScrollSmoother);

export default function App() {
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 1.5,
    });
  }, []);

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/allprojects" element={<AllProjects />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products" element={<Products />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}
