import Navbar from './components/navigation/navbar';

import Home from './components/sections/home';
import Contact from './components/sections/contact';
import Footer from './components/navigation/footer';
import './styles/main.css';
import './styles/scroll/scroll.js';
import './styles/App.css';
 

function App() {
  return (
    <>
      <img
        className="background-image"
        src="fondowebtec.png"
        alt="Background Image"
      />
      <Navbar />
      <main>
        <br></br>
        <Home />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
