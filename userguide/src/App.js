import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import locusLogo from '../src/Images/LocusLogo.png'
import HomeScreen from './Screens/HomeScreen'

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };


  return (
    <BrowserRouter>

<header className="header">
        <div className="brand">
        <img className="locusLogo" src={require("./LocusLogo.png")}></img>
          <br></br>
          <button onClick={openMenu}>&#9776;</button>

         Transfleet Terminal
        </div>
        <div className="header-links"></div>
      </header>
      <aside className="sidebar">
       <h3>Test av sidebar</h3>
       <Link onClick={closeMenu}> Last ned appen</Link>
      </aside>

      <main className="main">
        <div className="content">
        <Route path="/" exact={true} component={HomeScreen} />
        
        </div>
      </main>




    <footer className="footer">
        <p>utvikler Morten</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
