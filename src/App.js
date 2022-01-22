import React from "react";
import StartingPage from "./Pages/StartingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeginnerProjectPage from "./Pages/BeginnerProjectPage";
import AdeptPracticePage from "./Pages/AdeptPracticePage";
import ExpertLevel from "./Pages/ExpertLevel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartingPage />}></Route>
        <Route path="Beginner" element={<BeginnerProjectPage />} />
        <Route path="Adept" element={<AdeptPracticePage />} />
        <Route path="Expert" element={<ExpertLevel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
