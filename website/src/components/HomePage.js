import React from "react";
import homeImage from "../images/Kindergarten/Misc/SchoolPic.jpg";
const HomePage = () => {
  return (
    <section
      className="hero is-fullheight-with-navbar"
      style={{ marginTop: 85 }}
    >
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1 has-text-centered">
            Hi, I'm Colette Renne!
          </h1>
          <img className="is-centered" src={homeImage} style={{ width: 400 }} />
          <h2 className="subtitle is-3 has-text-centered">About Me</h2>
          <p className="has-text-centered">
            I am 5 and a half years old and I am using this website to study
            programming using HTML, Golang, React, CSS and JavaScript because my{" "}
            <a
              href="https://github.com/davidrenne"
              target="_blank"
              rel="noreferrer"
            >
              dad
            </a>{" "}
            wants me to learn it. Follow me on my journey!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
