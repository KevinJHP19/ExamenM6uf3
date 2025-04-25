import { useContext } from "react";
import { PedidoContext } from "./PedidoContex";

export default function TablaPedidos({ id, grupo, numeromesa, cerveza, cantidad, estado }) {
    console.log("TablaPedidos cargado");

    const { pedidos, setPedidos } = useContext(PedidoContext);

    // Función para eliminar un pedido
    const eliminarPedido = () => {
        const nuevosPedidos = pedidos.filter((pedido) => pedido.id !== id);
        setPedidos(nuevosPedidos);
        console.log(`Pedido con ID ${id} eliminado`);
    };

    return (
        <tr>
            <td>{id}</td>
            <td>{grupo}</td>
            <td>{numeromesa}</td>
            <td>{cerveza}</td>
            <td>{cantidad}</td>
            <td>{estado}</td>
            <td>
                <button className="btn btn-danger" onClick={eliminarPedido}>
                    Eliminar
                </button>
            </td>
        </tr>
    );
}