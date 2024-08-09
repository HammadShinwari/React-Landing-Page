import React from "react";
import "../style/aboutpage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="homePage">
        <div className="overlay">
          <h1>This is a About Page</h1>
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
      <Footer />
    </>
  );
}

export default AboutPage;
