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
                <button className="btn btn-danger" >
                    Borrar pedido
                </button>
            </td>
        </tr>
    );
}