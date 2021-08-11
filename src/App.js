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
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container"></div>
          <br />
          <br />
          <div class="row center">
            <About></About>
          </div>
          <br />
          <br />
        </div>

        <div class="parallax">
          <img
            id="parallax-img"
            src={
              require(`./images/isaac-quesada-1AyqZcC7zSg-unsplash.jpg`).default
            }
            alt="Unsplashed background img"
          ></img>
        </div>
      </div>
      <div className="container">
        <Resume></Resume>
      </div>
      <div className="container">
        <Work></Work>
      </div>
      <div>
      <Footer></Footer>
      </div>
    </div>
    
  );
}

export default App;
