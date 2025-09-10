import { Routes, Route } from 'react-router';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import AllProjects from './pages/AllProjects';
import AllProducts from './pages/AllProducts';
import './index.css';

export default function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/allprojects" element={<AllProjects />} />
          <Route path="/allproducts" element={<AllProducts />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
