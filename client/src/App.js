import './App.css';
import Auth from './Pages/auth/Auth';
import Home from './Pages/home/Home';
import Profile from './Pages/profile/Profile';


function App() {
  return (
    <div className="App">
      <div className="blur" style={{top:'-18%', right:'0'}}></div>
      <div className="blur" style={{top:'36%', left:'-8rem'}}></div>

      {/* <Home /> */}
      {/* <Profile /> */}
      <Auth />

    </div>
  );
}

export default App;
