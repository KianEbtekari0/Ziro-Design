import { Routes, Route } from 'react-router';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import './index.css'

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
