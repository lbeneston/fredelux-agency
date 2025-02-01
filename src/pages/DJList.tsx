import { Link } from 'react-router-dom';

export const DJList = () => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        <li><Link to="/dj-1">DJ numéro 1</Link></li>
        <li><Link to="/dj-2">DJ numéro 2</Link></li>
      </ul>
    </div>
  );
};