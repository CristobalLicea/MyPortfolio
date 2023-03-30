import React from "react";
import { Landing, About} from '../index'
import './Homepage.css';

const Homepage = () => {
  return (
    <div id='homepage'>
      <Landing />
      <About />
    </div>
  );
}

export default Homepage;