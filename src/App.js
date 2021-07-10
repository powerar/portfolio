import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Work from './components/Work';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'About',
    },
    {
      name: 'Contact',
    },
    {
      name: 'Work',
    },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  
    const renderAbout = () => {
      if (currentCategory === "About") {
        return <About></About>
      }
    }
    
    const renderWork = () => {
      if (currentCategory === "Work") {
        return <Work></Work>
      }
    }

    const renderContact = () => {
      if (currentCategory === "Contact") {
        return <ContactForm></ContactForm>
      }
    }
    

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        {renderWork()}
        {renderContact()}
        {renderAbout()}
      </main>
    </div>
  );
}

export default App;
