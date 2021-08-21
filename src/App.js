import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Work from './components/Work';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  return (
    <div>
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
