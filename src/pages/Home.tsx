import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Bienvenue sur notre site !</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/liste-dj">Liste des DJs</Link></li>
      </ul>
    </div>
  );
};