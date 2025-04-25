import { useContext } from "react";
import { PedidoContext } from "../components/PedidoContex";
import TablaPedidos from "../components/TablaPedidos";

export default function Camareros() {
    const { pedidos } = useContext(PedidoContext);

    return (
        <div className="container mt-3 p-5 border shadow-lg ">
            <h1>Pedidos</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
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
                            key={pedido.id}
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
    );
}