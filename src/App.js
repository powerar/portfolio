import './App.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Work from './components/Work';
import Footer from './components/Footer';
import Resume from './components/Resume';
import About from './components/About Me'
import Particles from 'react-particles-js';
import particlesConfig from './components/config/config-particles';

function App() {
  return (
    <div className="App" style={{ overflow: 'hidden' }}>
      <Nav></Nav>
      <div id="particles-js">
        <Particles params={particlesConfig} />
      </div>
      <div id="hero" class="row center">
        <Hero></Hero>
      </div>

      <div id="work" className="container">
        <Work></Work>
      </div>
      <div id="experience" className="container">
        <Resume></Resume>
      </div>
      <div id="about-me" className="container">
        <About></About>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
