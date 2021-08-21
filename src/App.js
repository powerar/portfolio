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
    <div className="App" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute' }}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>

      <Nav></Nav>

      <div class="row center">
        <About></About>
      </div>

      <div className="container">
        <Work></Work>
      </div>

      <div className="container">
        <Resume></Resume>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
