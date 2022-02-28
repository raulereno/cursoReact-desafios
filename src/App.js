import Prueba from "./componentes/pruebas/Prueba";
import Rutas from "./routes";
import "./scss/styles.scss";
import CartContext from './context/CartContext';
import Loader from "./componentes/loader/Loader";

function App() {
  return (
    <>
      <CartContext>
        <Rutas/>
      </CartContext>
    </>
  );
}

export default App;
