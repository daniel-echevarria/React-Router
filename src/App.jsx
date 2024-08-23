import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Super Cool Heroes</h1>

      <ul>
        <li>
          <Link to="super-hero">Super Heroes</Link>
        </li>
        <li>
          <Link to="super-hero/batman">Batman</Link>
        </li>
        <li>
          <Link to="super-hero/spider-man">Spider</Link>
        </li>
      </ul>
    </>
  );
}

export default App;
