import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Work from './components/Work';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  const [categories] = useState(['About', 'Contact', 'Work', 'Resume']);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const renderAbout = () => {
    if (currentCategory === 'About') {
      return <About currentCategory={currentCategory}></About>;
    }
  };

  const renderWork = () => {
    if (currentCategory === 'Work') {
      return <Work currentCategory={currentCategory}></Work>;
    }
  };

  const renderContact = () => {
    if (currentCategory === 'Contact') {
      return <ContactForm currentCategory={currentCategory}></ContactForm>;
    }
  };

  const renderResume = () => {
    if (currentCategory === 'Resume') {
      return <Resume currentCategory={currentCategory}></Resume>;
    }
  };

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main key="About">
        {renderWork()}
        {renderContact()}
        {renderAbout()}
        {renderResume()}
      </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
