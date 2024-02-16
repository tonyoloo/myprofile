import React from "react";
import { useState, useEffect } from 'react';
import './style.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.bundle'

import NavBar from "./components/NavBar";
import LandingPage from "./components/landingPage";
import 'animate.css'; 
import About from "./components/About";
import Projects from "./components/Projects";
import LoadingSpinner from './components/LoadingSpinner';
import Services from "./components/Services";
import Wow from 'wowjs';
import Contacts from "./components/Contacts";


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App col-xxl-12">
    {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <NavBar />
          <LandingPage />
          <About />
          <Services />
          <Projects />
          <Contacts />
          <section className='contacts-footer container-fluid '>
          &copy;safariappreneurs. All rights reserved.
          </section>
        </>
      )}
  

    </div>
  );
}

export default App;
