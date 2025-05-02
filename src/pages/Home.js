import React from "react";
import dogImage from "../assets/dog.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-picture">
        <img src={dogImage} alt="Profile" />
      </div>
      <blockquote className="quote">
        <em>"We can only see a short distance ahead, but we can see plenty there that needs to be done." — Alan Turing</em>
      </blockquote>
      <section className="bio">
        <h2>About Me</h2>
        <p>
          Hey, I’m Daniel. I’m a new programmer still finding my footing in the world of development. The first language I learned was Turing, so that quote above felt like a good fit.
        </p>
        <p>
          I enjoy working on personal projects—especially ones that are a bit different from the usual. I like the challenge of creating something unique, whether it’s a small experiment or something more ambitious.
        </p>
        <p>
          These days, I spend a lot of time working with React, Node.js, and C#. I focus on writing clean, efficient code that makes sense to both computers and the people who work with it.
        </p>
        <p>
          Outside of coding, I’m into game development and open-source projects. There’s always something new to learn, and that’s part of what makes programming exciting.
        </p>
      </section>
    </div>
  );
};

export default Home;
