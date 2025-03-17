import React from "react";
import dogImage from "../assets/dog.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-picture">
        <img src={dogImage} alt="Profile" />
      </div>
      <section className="bio">
        <h2>About Me</h2>
        <p>
          Hello, I'm Daniel, a dedicated software developer with a strong foundation in both front-end and back-end technologies. I specialize in building scalable, efficient, and user-centric applications with a focus on React, Node.js, and Swift. My approach to development is driven by a passion for clean code, problem-solving, and delivering high-quality digital solutions that meet both user and business needs.
        </p>
        <p>
          I bring a combination of technical expertise, attention to detail, and collaborative teamwork to every project. I am committed to continuous growth and staying current with emerging technologies to ensure the solutions I create are innovative and sustainable.
        </p>
        <p>
          Outside of development, I am interested in Game Development, and I enjoy contributing to open-source projects and collaborating with other professionals in the field.
        </p>
      </section>
    </div>
  );
};

export default Home;
