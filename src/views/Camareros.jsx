import TablaPedidos from "../components/TablaPedidos"; // Corregido el nombre del componente
import { pedidos } from "../bd/pedidos";

export default function Camareros() {
    console.log("Camareros cargado");

    return (
        <div id="tablaPedidos" className="container mt-5 mb-5 p-5 border shadow-lg">
            <div className="row">
                <h1 className="text-center mb-5">----- Vista camareros -----</h1>
                <h3>Pedidos</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Grupo</th>
                            <th>Mesa</th>
                            <th>Cerveza</th>
                            <th>Cantidad</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedidos.map((pedido) => (
                            <TablaPedidos
                                key={pedido.id} // Corregido el uso del componente
                                id={pedido.id}
                                grupo={pedido.grupo}
                                numeromesa={pedido.numeromesa}
                                cerveza={pedido.cerveza}
                                cantidad={pedido.cantidad}
                                estado={pedido.estado}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}