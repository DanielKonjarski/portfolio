import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import daycareBuddy from "../assets/daycarebuddy.png";
import chatApp from "../assets/chatapp.png";
import toDo from "../assets/todo.png";
import employeeManagementSystem from "../assets/employeemanagementsystem.png";
import weatherApp from "../assets/weatherapp.png";
import connectFour from "../assets/connectfour.png";
import travelAgency from "../assets/travelagency.png";

const Academic = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#fff" }}>Academic Work</h2>
      <p style={{ color: "#ccc" }}>
        Below are some of the projects I have worked on and uploaded to GitHub:
      </p>
      
      <div className="github-projects">
        <div className="project-card">
          <img
            src={daycareBuddy}
            alt="GitHub"
            className="academic-img"
          />
          <h3>Daycare Buddy</h3>
          <p>Attendance based web application with integrated SMS notification system for daycares.</p>
          <a
            href="https://github.com/jamdazai/Daycare-Buddy"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>
        
        <div className="project-card">
          <img
            src={chatApp}
            alt="GitHub"
            className="academic-img"
          />
          <h3>Real-Time Chat App</h3>
          <p>A real-time chat application made with Node.js with functioning user authentication.</p>
          <a
            href="https://github.com/DanielKonjarski/101436648_lab_test1_chat_app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <img
            src={toDo}
            alt="GitHub"
            className="academic-img-small"
          />
          <h3>Todo App</h3>
          <p>An iOS application designed to help users manage and organize their tasks.</p>
          <a
            href="https://github.com/DanielKonjarski/todo-app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <img
            src={employeeManagementSystem}
            alt="GitHub"
            className="academic-img"
          />
          <h3>Employee Management System</h3>
          <p>An Employee Management System with CRUD, authentication using Node.js and MongoDB with no UI.</p>
          <a
            href="https://github.com/DanielKonjarski/fullstack-dev/tree/main/week%207/Assignment1-101436648"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <img
            src={connectFour}
            alt="GitHub"
            className="academic-img"
          />
          <h3>Connect 4</h3>
          <p>A Java game of connect 4 with two gamemodes, Human vs Human & Human vs AI.</p>
          <a
            href="https://github.com/DanielKonjarski/connect-four"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <img
            src={travelAgency}
            alt="GitHub"
            className="academic-img"
          />
          <h3>Travel Agency</h3>
          <p>Travel agenct application using MVC architecture and written in C#.</p>
          <a
            href="https://github.com/DanielKonjarski/travel-agency"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <img
            src={weatherApp}
            alt="GitHub"
            className="academic-img"
          />
          <h3>Weather App</h3>
          <p>A ReactJS application that shows real-time city weather using OpenWeatherMap API.</p>
          <a
            href="https://github.com/DanielKonjarski/weather-app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png"
            alt="GitHub"
            className="project-img"
          />
          <h3>More Projects to come...</h3>
          <p>I am always making/working on new projects, if you would like to view my github, please click the link below.</p>
          <a
            href="https://github.com/DanielKonjarski"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            My GitHub
          </a>
        </div>        
      </div>
    </div>
  );
};

export default Academic;
