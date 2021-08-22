import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Work from './components/Work';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Particles from 'react-particles-js';
import particlesConfig from './components/config/config-particles';

function App() {
  return (
    <div className="App" style={{ overflow: 'hidden' }}>
      <Nav></Nav>
      <div id="particles-js">
        <Particles params={particlesConfig} />
      </div>

      <div id="about" class="row center">
        <About></About>
      </div>

      <div id="work" className="container">
        <Work></Work>
      </div>

      <div id="experience" className="container">
        <Resume></Resume>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
