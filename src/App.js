import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Work from './components/Work';
import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Work></Work>
        <About></About>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
