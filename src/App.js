import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar
import Home from "./pages/Home"; // Page for Home
import PersonalData from "./pages/PersonalData"; // Personal Data page
import Academic from "./pages/Academic"; // Academic Credentials page
import WorkExperience from "./pages/WorkExperience"; // Work Experience page
import Professional from "./pages/Professional"; // Professional Summary page

function App() {
  return (
    <Router>
      <Navbar /> {/* Add the Navbar */}
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal" element={<PersonalData />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/work" element={<WorkExperience />} />
          <Route path="/professional" element={<Professional />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
