import Header from './components/Header';
import Home from './pages/Home';
import './index.css'
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
      <Header />
      <div>
        <Home />
        <AboutUs />
      </div>
    </>
  );
}

export default App;
