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
              require(`./images/shapelined-_JBKdviweXI-unsplash.jpg`)
                .default
            }
            alt="Unsplashed background img"
          ></img>
        </div>
      </div>
      <div className="container">
        <Resume></Resume>
        <Work></Work>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
