import React from "react";
import Home from "./Home";
import QuizGame from "./QuizGame";
import EpisodeGuide from "./EpisodeGuide";
import CharacterEncyclopedia from "./CharacterEncyclopedia";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/characters" Component={CharacterEncyclopedia} />
        <Route path="/episodes" Component={EpisodeGuide} />
        <Route path="/quiz" Component={QuizGame} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;