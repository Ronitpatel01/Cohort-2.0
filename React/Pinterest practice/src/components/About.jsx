import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <section>
        <div className="about">
          <button>About Horizon</button>
          <p>
            At Horizon, we don’t just play tennis — we live it. Since 2021, our
            club has been a home for players of all levels, from eager beginners
            to seasoned pros.
          </p>
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

export default About;
