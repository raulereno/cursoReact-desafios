import ItemListContainer from './componentes/header/ItemListContainer';
import NavBar from './componentes/header/Navbar/NavBar';
import './scss/styles.scss';


function App() {


  return(
    <>
      <NavBar/>
      <ItemListContainer  texto1={"Bienvenidos"} texto2={"Welcome"} texto3={"欢迎"}/>  
    </>
  )
}

export default App;
