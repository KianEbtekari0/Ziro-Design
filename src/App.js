import { Routes, Route } from 'react-router';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import AllProjects from './pages/AllProjects';
import Shop from './pages/Shop';
import Products from './pages/Products';
import './index.css';
import ScrollTop from './components/ScrollTop'

export default function App() {
  return (
    <>
      <Header />
      <div>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/allprojects" element={<AllProjects />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
