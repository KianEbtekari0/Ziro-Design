import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Projects from './pages/Projects';
import Products from './pages/Products';
import './index.css'

function App() {
  return (
    <>
      <Header />
      <div>
        <Home />
        <AboutUs />
        <Projects />
        <Products />
      </div>
    </>
  );
}

export default App;
