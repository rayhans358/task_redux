import './App.css';
// import Hooks from './Materi/Hooks';
// import Hook from './Task/Hook';
// import { Link, Outlet } from 'react-router-dom';
import Redux from './Task/Redux';

function App() {
  return (
    <div className="App">
      {/* <Hooks/> */}
      {/* <Hook /> */}
      {/* <nav>
        <Link to="/home" className="mr">Home</Link>
        <Link to="/about" className="mr">About</Link>
        <Link to="/profile" className="mr">Profile</Link>
      </nav>
      <Outlet/> */}
      <Redux/>
    </div>
  );
}

export default App;
