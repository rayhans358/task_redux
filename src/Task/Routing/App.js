import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <nav>
      <Link to="/home" className="mr">Home</Link>
      <Link to="/about" className="mr">About</Link>
      <Link to="/profile" className="mr">Profile</Link>
    </nav>
    <Outlet/>
    </div>
  );
}

export default App;
