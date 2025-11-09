import { Routes, Route } from 'react-router';
import { useEffect, Suspense } from 'react';
import React from 'react';
import gsap from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import './index.css';

gsap.registerPlugin(ScrollSmoother);

const ProductDetails = React.lazy(() => import('./components/ProductDetails'));
const AllProjects = React.lazy(() => import('./pages/AllProjects'));
const Shop = React.lazy(() => import('./pages/Shop'));
const Products = React.lazy(() => import('./pages/Products'));

export default function App() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    let smoother;

    if (!isMobile) {
      smoother = ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
      });
    }

    return () => {
      if (smoother) smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Header />
        <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/allprojects" element={<AllProjects />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </div>
  );
}
