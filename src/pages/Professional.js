import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import statusReport from "../assets/Status Report.pdf";
import requirementsDesign from "../assets/Requirements Analysis and Design.pdf";
import projectVision from "../assets/Project Vision.pdf";
import projectSummary from "../assets/Project Summary.pdf";
import projectPlan from "../assets/Project Plan.pdf";
import highLevelReqs from "../assets/High Level Requirements.pdf";

const Professional = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#333",
        borderRadius: "8px",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <h1 style={{ color: "#fff", textAlign: "center" }}>Capstone Project: Daycare Attendance System</h1>

      <p style={{ color: "#ccc", textAlign: "center" }}>
        This project is a daycare attendance system that utilizes an attendance system and SMS technology to ensure secure child pick-up by parents. Below are the documents, links, and images related to the project.
      </p>

      {/* Links to Figma and GitHub */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <a
          href="https://www.figma.com/design/zZLUzkUy0rpd4jNYRrViwz/Daycare-Attendance-System?node-id=465-3&p=f&t=lutZLg0Wghq0NzEh-0"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            margin: "10px",
            color: "#ff5733",
            textDecoration: "none",
            fontSize: "1.1em",
          }}
        >
          View Figma Design
        </a>
        <a
          href="https://github.com/jamdazai/Daycare-Buddy"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            margin: "10px",
            color: "#ff5733",
            textDecoration: "none",
            fontSize: "1.1em",
          }}
        >
          View GitHub Repository
        </a>
      </div>

      {/* PDF Files */}
      <div>
        <h2 style={{ color: "#ff5733", textAlign: "center" }}>Project Documents</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", marginBottom: "40px" }}>
          <div style={{ backgroundColor: "#444", padding: "10px", borderRadius: "8px" }}>
            <a href={statusReport} target="_blank" rel="noopener noreferrer" style={{ color: "#ff5733", textDecoration: "none" }}>
              Status Report.pdf
            </a>
          </div>
          <div style={{ backgroundColor: "#444", padding: "10px", borderRadius: "8px" }}>
            <a href={requirementsDesign} target="_blank" rel="noopener noreferrer" style={{ color: "#ff5733", textDecoration: "none" }}>
              Requirements Analysis and Design.pdf
            </a>
          </div>
          <div style={{ backgroundColor: "#444", padding: "10px", borderRadius: "8px" }}>
            <a href={projectVision} target="_blank" rel="noopener noreferrer" style={{ color: "#ff5733", textDecoration: "none" }}>
              Project Vision.pdf
            </a>
          </div>
          <div style={{ backgroundColor: "#444", padding: "10px", borderRadius: "8px" }}>
            <a href={projectSummary} target="_blank" rel="noopener noreferrer" style={{ color: "#ff5733", textDecoration: "none" }}>
              Project Summary.pdf
            </a>
          </div>
          <div style={{ backgroundColor: "#444", padding: "10px", borderRadius: "8px" }}>
            <a href={projectPlan} target="_blank" rel="noopener noreferrer" style={{ color: "#ff5733", textDecoration: "none" }}>
              Project Plan.pdf
            </a>
          </div>
          <div style={{ backgroundColor: "#444", padding: "10px", borderRadius: "8px" }}>
            <a href={highLevelReqs} target="_blank" rel="noopener noreferrer" style={{ color: "#ff5733", textDecoration: "none" }}>
              High Level Requirements.pdf
            </a>
          </div>
        </div>
      </div>

      {/* Screenshots */}
      <div style={{ marginTop: "20px" }}>
        <h2 style={{ color: "#ff5733", textAlign: "center" }}>Project Screenshots</h2>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", marginBottom: "40px" }}>
          <img
            src={image1}
            alt="Screenshot 1"
            style={{ width: "48%", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
          />
          <img
            src={image2}
            alt="Screenshot 2"
            style={{ width: "48%", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
          <img
            src={image3}
            alt="Screenshot 3"
            style={{ width: "48%", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
          />
          <img
            src={image4}
            alt="Screenshot 4"
            style={{ width: "48%", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Professional;
