
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import LocusLogo from './Images/LocusLogo.png'
import HomeScreen from './Screens/HomeScreen'
import DownloadApp from './Screens/DownloadApp'
import CustomerCode from './Screens/CustomerCode'
import LoginGuide from './Screens/LoginGuide'
import MenuGuide from './Screens/MenuGuide'
import RegContainer from './Screens/RegContainer'
import LoadContainer from './Screens/LoadContainer'
import Reception from './Screens/Reception'
import LogOutGuide from './Screens/LogOutGuide'

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

        <Link to='/'>TransFleet Terminal</Link> 
        </div>
        <div className="header-links"></div>
      </header>


      <aside className="sidebar">
      <h4>Kom igang</h4>
        <ul>
          <li>
       <Link to='/DownloadApp' onClick={closeMenu}> Last ned appen</Link>
       </li>
       <li><Link to='/CustomerCode' onClick={closeMenu}> Kundekode</Link>
       </li>
       <li>
       <Link to='/LoginGuide' onClick={closeMenu}>Login guide</Link>
       
       </li>
       <li>
       <Link to='/LogOutGuide' onClick={closeMenu}>Logout guide</Link>
       </li>
      
       </ul>
       <div> &nbsp; </div> 
       
       <h4>Funksjons forklaringer</h4>
       <ul>
        <li> <Link to='/RegContainer' onClick={closeMenu}>Register container</Link></li>
         <li> <Link to='/LoadContainer' onClick={closeMenu}>Fremplukk</Link></li>
         <li> <Link to='/Reception' onClick={closeMenu}>Mottak</Link></li>
         </ul>
      </aside>



      <main className="main">
        <div className="content">
        <Route path="/" exact={true} component={HomeScreen} />
        <Route path='/DownloadApp' component={DownloadApp}></Route>
        <Route path ='/CustomerCode'component ={CustomerCode}/>
        <Route path ='/LoginGuide' component = {LoginGuide}/> 
        <Route path ='/MenuGuide' component = {MenuGuide}/>  
        <Route path='/RegContainer'  component={RegContainer}/>   
        <Route path='/LoadContainer'  component={LoadContainer}/>
        <Route path='/Reception' component={Reception}/>
        <Route path='/LogOutGuide' component ={LogOutGuide}/>
        </div>
      </main>




    <footer className="footer">
        <p>utviklet av Support</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
