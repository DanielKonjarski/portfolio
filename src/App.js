import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PersonalData from "./pages/PersonalData";
import Academic from "./pages/Academic";
import WorkExperience from "./pages/WorkExperience";
import Professional from "./pages/Professional";
import Details from "./pages/Details/DetailsOne";

function App() {
  return (
    <Router>
      <Navbar />
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
