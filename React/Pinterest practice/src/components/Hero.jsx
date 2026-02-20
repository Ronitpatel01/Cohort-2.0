import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
      <>
        <section className="hero">
          <div className="hero-content">
            <h1>Unleash Your Inner Champion Today. All In One Place.</h1>
            <p>
              Join the ultimate tennis experience — where passion meets
              performance.
            </p>
            <button className="btn-primary">Start your own journey</button>
          </div>
        </section>

        <section className="stats-row">
          <div>
            <h3>12,000+</h3>
            <p>Hours of play</p>
          </div>
          <div>
            <h3>89%</h3>
            <p>Retention Rate</p>
          </div>
          <div>
            <h3>1,200+</h3>
            <p>Active Members</p>
          </div>
          <div>
            <h3>125+</h3>
            <p>Annual Tournaments</p>
          </div>
        </section>
      </>
  );
};

export default Hero;
