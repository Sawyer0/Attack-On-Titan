import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from './NavigationBar';
import Home from './Home';
import CharacterEncyclopedia from './CharacterEncyclopedia'
import EpisodeGuide from './EpisodeGuide'
import QuizGame from './QuizGame';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" Component={Home} />
        <Route path="/characters" Component={CharacterEncyclopedia} />
        <Route path="/episodes" Component={EpisodeGuide} />
        <Route path="/quiz" Component={QuizGame} />
      </Switch>
    </Router>
  );
}

export default App;
