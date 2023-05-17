import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="characters">Character Encyclopedia</Link>
        </li>
        <li>
          <Link to="episodes">Episode Guide</Link>
        </li>
        <li>
          <Link to="quiz">Quiz Game</Link>
        </li>
      </ul>
    </nav>
  );
}
