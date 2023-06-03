import React from "react";
import HomePage from "./HomePage";
import QuizGame from "./QuizGame";
import EpisodeGuide from "./EpisodeGuide";
import CharacterEncyclopedia from "./CharacterEncyclopedia";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route key="/" path="/" element={<HomePage/>} />
        <Route key="/characters" path="/characters" component={CharacterEncyclopedia} />
        <Route key="/episodes" path="/episodes" component={EpisodeGuide} />
        <Route key="/quiz" path="/quiz" component={QuizGame} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
