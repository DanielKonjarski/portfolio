import React from "react";

const WorkExperience = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#fff" }}>Work Experience</h2>
      <p style={{ color: "#ccc" }}>
        
      </p>

      <div className="work-experience-card">
        <h3 style={{ color: "#ff5733" }}>Audio Visual Technician</h3>
        <p style={{ color: "#ccc", fontStyle: "italic" }}>
          <strong>Toronto District School Board – Etobicoke Collegiate Institute</strong>
        </p>
        <p style={{ color: "#ccc", fontStyle: "italic" }}>2017 – 2020</p>

        <ul style={{ color: "#ccc", paddingLeft: "20px" }}>
          <li>Set up and operated audiovisual equipment according to event requirements and specifications.</li>
          <li>Worked closely with event planners and customers to grasp their audiovisual requirements and preferences.</li>
          <li>Oversaw the inventory of audiovisual equipment, maintaining proper storage, upkeep, and organization to streamline deployment for upcoming events.</li>
          <li>Contributed to the coordination and implementation of event arrangements, encompassing equipment arrangement, cable organization, and venue configuration to enhance audience satisfaction.</li>
          <li>Performed comprehensive equipment inspections and troubleshooting to ensure seamless functionality and swift resolution of technical issues throughout events.</li>
          <li>Provided training and assistance to team members and clientele regarding the operation and fundamental problem-solving of AV equipment.</li>
        </ul>
      </div>

      {/* Academic Credentials Section */}
      <h2 style={{ color: "#fff" }}>Academic Credentials</h2>
      <div className="academic-credentials-card">
        <h3 style={{ color: "#ff5733" }}>Academic Credentials</h3>

        <div>
          <h4 style={{ color: "#fff" }}>
            George Brown College, Centre for Arts, Design, and Information Technology
          </h4>
          <p style={{ color: "#ccc", fontStyle: "italic" }}>
            <strong>Computer Programming and Analysis</strong>
          </p>
          <p style={{ color: "#ccc", fontStyle: "italic" }}>September 2022 – Present</p>

          <ul style={{ color: "#ccc", paddingLeft: "20px" }}>
            <li>Academics: cGPA 3.60/4.0</li>
            <li>Awards: Dean’s Honour List</li>
            <li>
              Relevant Courses: IT Essentials (A-); Professional Workplace Competencies (A+); Agile Software
              Development (A-); Open-Source Development (A+); Data Structures & Algorithms (A-); Application
              Development (A-)
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: "#fff" }}>Etobicoke Collegiate Institute</h4>
          <p style={{ color: "#ccc", fontStyle: "italic" }}>
            <strong>High School Graduate</strong>
          </p>
          <p style={{ color: "#ccc", fontStyle: "italic" }}>2016 – 2020</p>

          <ul style={{ color: "#ccc", paddingLeft: "20px" }}>
            <li>Academics: High School Diploma</li>
            <li>Awards: Certificate of Achievement in Spanish</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
