import './scss/styles.scss';
import Navbar from './componentes/NavBar';
import logo from "./logo-normal.png";


function App() {


  return(
    <>
      <div className="navBar">
        <a href=""><img src={logo} className='logo'/></a>
        <Navbar/>
        <button type='button' className='btn btn-secondary botonLogin'>Login</button>
      </div>
    </>
  )
}

export default App;
