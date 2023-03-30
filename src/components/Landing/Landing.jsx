import React from "react";
import './Landing.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Landing = () => {
  return(
    <section id="landing">
      <div className='container'>
        <div className="landing-hero">
        <div className='hero-text'>
          <h1>Full-Stack React Developer 😊</h1>
          <p>Hi, I'm Cristobal Licea. A passionate Full-Stack React Developer based in Houston, Texas. 📍</p>
          <div style={{ display: 'flex', gap: '10px'}}>
            <div>
              <FaLinkedin className="landing-icon"/>
            </div>
            <div>
              <FaGithub className="landing-icon"/>
            </div>
          </div>
        </div>
        <div className="hero-img"></div>
        </div>
        <div style={{marginTop: '50px', display: 'flex', gap: '15px', alignItems: 'center'}}>
          <h2>Tech Stack |</h2>
          <div className="landing-tech"></div>
          <div className="landing-tech"></div>
          <div className="landing-tech"></div>
          <div className="landing-tech"></div>
          <div className="landing-tech"></div>
        </div>
      </div>

    </section>
  );
}

export default Landing