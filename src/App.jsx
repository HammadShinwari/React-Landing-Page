import React from "react";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Footer from "./components/Footer";
import './style/home.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="homePage">
        <div className="overlay">
          <h1>We are a Landing Page</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            consequatur quos sunt ad amet dolorem numquam optio iure minima
            cumque dolor ea vitae error dicta.
          </p>
          <div className="homeBtn">
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <Features />
      <Footer />
    </>
  )
}

export default App;
