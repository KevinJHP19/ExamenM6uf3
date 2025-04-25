export default function TablaPedidos({ id, grupo, numeromesa, cerveza, cantidad, estado }) {
    console.log("TablaPedidos cargado");

    return (
        <tr>
            <td>{id}</td>
            <td>{grupo}</td>
            <td>{numeromesa}</td>
            <td>{cerveza}</td>
            <td>{cantidad}</td>
            <td>{estado}</td>
            <td>
                <button className="btn btn-danger">Eliminar</button>
            </td>
        </tr>
    );
}