import Prueba from "./componentes/pruebas/Prueba";
import Rutas from "./routes";
import "./scss/styles.scss";
import CartContext from './context/CartContext';

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
