
import Header from './components/Header';
import Usuarios from './views/Usuarios';
import Camareros from './views/Camareros';
import { PedidoProvider } from './components/PedidoContex'; // Importar el proveedor del contexto correctamente

import './App.css';

function App() {
  return (
    <PedidoProvider> {/* Envolver la aplicación con el proveedor */}
      <Header />
      <main>
        <Usuarios />
      </main>
      <footer>
        <Camareros />
      </footer>
    </PedidoProvider>
  );
}

export default App;