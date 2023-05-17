import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" Component={Home} />
                <Route path="/characters" Component={CharacterEncyclopedia} />
                <Route path="/episodes" Component={EpisodeGuide} />
                <Route path="/quiz" Component={QuizGame} />
            </Switch>
        </Router>
    )
}