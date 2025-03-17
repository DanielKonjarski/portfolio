import React from "react";

const WorkExperience = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#fff" }}>Work Experience</h2>
      <p style={{ color: "#ccc" }}>
        Below is a summary of my work experience as an Audio Visual Technician at the Toronto District School Board.
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
    </div>
  );
};

export default WorkExperience;
