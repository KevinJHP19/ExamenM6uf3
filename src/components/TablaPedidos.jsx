import { useContext } from "react";
import { PedidoContext } from "./PedidoContex";

export default function TablaPedidos({ id, grupo, numeromesa, cerveza, cantidad, estado }) {
    console.log("TablaPedidos cargado");

    const { pedidos, setPedidos } = useContext(PedidoContext);

    
    
    const resolverPedido = (id) => {
        const nuevosPedidos = pedidos.map((pedido) =>
            pedido.id === id ? { ...pedido, estado: "servido" } : pedido
        );
        setPedidos(nuevosPedidos);
        console.log(`Pedido con ID ${id} actualizado a "preparado"`);
    };
    const eliminarPedido = (id) => {
        // Filtrar el pedido que se desea eliminar
        const nuevosPedidos = pedidos.filter((pedido) => pedido.id !== id);
        setPedidos(nuevosPedidos);
        console.log(`Pedido con ID ${id} eliminado`);
    }
    


    return (
        <tr>
            <td>{id}</td>
            <td>{grupo}</td>
            <td>{numeromesa}</td>
            <td>{cerveza}</td>
            <td>{cantidad}</td>
            <td>
                {
                estado == "pendiente" ? (
                    <button className="btn btn-warning" onClick={ () => resolverPedido(id)} >{estado}</button>
                ) : (
                    <button className="btn btn-success"  onClick={ () => resolverPedido(id)}>{estado}</button>
                )}
                
                    
                    
                    
                
            </td>
            <td>
                <button className="btn btn-danger" onClick={ () => eliminarPedido(id)} >
                    Borrar pedido
                </button>
            </td>
        </tr>
    );
}