import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import LocusLogo from './Images/LocusLogo.png'
import HomeScreen from './Screens/HomeScreen'
import DownloadApp from './Screens/DownloadApp'
import CustomerCode from './Screens/CustomerCode'
import LoginGuide from './Screens/LoginGuide'

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
        <img className="locusLogo" src={LocusLogo} alt='Locus Logo'></img>
          <br></br>
          <button onClick={openMenu}>&#9776;</button>

        <Link to='/'>Transfleet Terminal</Link> 
        </div>
        <div className="header-links"></div>
      </header>
      <aside className="sidebar">
        <ul>
          <li>
       <Link to='/DownloadApp' onClick={closeMenu}> Last ned appen</Link>
       </li>
       <li><Link to='/CustomerCode' onClick={closeMenu}> Kundekode</Link>
       </li>
       <li>
       <Link to='/LoginGuide' onClick={closeMenu}>Login guide</Link>
       </li>
       </ul>
      </aside>

      <main className="main">
        <div className="content">
        <Route path="/" exact={true} component={HomeScreen} />
        <Route path='/DownloadApp' component={DownloadApp}></Route>
        <Route path ='/CustomerCode'component ={CustomerCode}/>
        <Route path ='/LoginGuide' component = {LoginGuide}/>       
        </div>
      </main>




    <footer className="footer">
        <p>utvikler Morten</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
