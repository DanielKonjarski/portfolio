import React from "react";

const PersonalData = () => {
    return (
        <div className="resume-container" style={{ textAlign: "center", padding: "20px" }}>
          <h1>Resume</h1>
          <embed
            src={require("../assets/Resume.pdf")}
            type="application/pdf"
            width="100%"
            height="800px"
          />
          <h1>Cover Letter</h1>
          <embed
            src={require("../assets/Cover Letter.pdf")}
            type="application/pdf"
            width="100%"
            height="800px"
          />
        </div>
      );
};

export default PersonalData;
