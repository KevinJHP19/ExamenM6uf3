import { bd }  from "../bd/bd"; 

import { PedidoContext }  from "./PedidoContex"
import FichaBirra from "./FichaBirra"; 
import { useContext } from "react";



export default function NuevoPedido(){
    console.log("Nuevo pedido cargado")
    const { pedidos, agregarPedido, selectBedida, setselectBedida } = useContext(PedidoContext); // Importando el contexto de pedidos y la cerveza seleccionada

    console.log(bd) // Verificando que la base de datos se importe correctamente
    

    //funcion para manjear el evento onChange del select
    const manejarcambio = (event) => {
        const selectedValue = event.target.value; // Obteniendo el valor seleccionado
        const selectedCerveza = bd.find((cerveza) => cerveza.nombre === selectedValue); // Buscando la cerveza en la base de datos
        setselectBedida(selectedCerveza); // Actualizando el estado con la cerveza seleccionada
    };
    
    function Mandapedido(event){

        event.preventDefault(); // Evitar el comportamiento por defecto del formulario  
        
        
        const grupo = document.querySelector("#nombregrupo").value; 
        const numeromesa = document.querySelector("#numeromesa").value; 
        const cantidad = document.querySelector("#cantidad").value; 
        const cerveza = document.querySelector("#cervezas").value; // Obteniendo el valor de la cerveza seleccionada

        const nuevoPedido = {
            id: pedidos.length + 1,
            grupo,
            numeromesa,
            cerveza,
            cantidad,
            estado: "pendiente" // Estado por defecto
        };
        agregarPedido(nuevoPedido); // Llamando a la función para agregar el nuevo pedido

        
        document.querySelector("#nombregrupo").value = ""; // Limpiando el campo de grupo
        document.querySelector("#numeromesa").value = ""; // Limpiando el campo de mesa
        document.querySelector("#cantidad").value = ""; // Limpiando el campo de cantidad
        document.querySelector("#cervezas").value = ""; // Limpiando el campo de cerveza
        setselectBedida(null); // Limpiando la cerveza seleccionada

    }
    
    
    return(
        <div className="row">
            <div className="col-6">
                <h3>Grupo</h3>
                <form noValidate className="needs-validation">
                    <label htmlFor="nombreGrupo" className="label-control">Nombre del grupo:</label>
                    <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Borrachos de DAW2"
                        minLength="4"
                        maxLength="10"
                        id="nombregrupo"
                        required
                    />
                    <div className="invalid-feedback">
                        El nombre del grupo debe tener entre 4 y 10 caracteres.
                    </div>

                    <label htmlFor="numeroMesa" className="label-control">Mesa número</label>
                    <input
                        type="number"
                        className="form-control mt-2"
                        placeholder="0"
                        id="numeromesa"
                        min="1"
                        max="15"
                        required
                    />
                    <div className="invalid-feedback">
                        El número de mesa debe estar entre 1 y 15.
                    </div>

                    <h3 className="mt-5">Haz tu pedido</h3>
                    <div className="d-flex gap-3">
                        <select
                            name="cervezas"
                            id="cervezas"
                            className="form-control"
                            onChange={manejarcambio}
                            required
                        >
                            <option value="">Selecciona qué birra quieres</option>
                            {bd.map((birra) => (
                                <option key={birra.id} value={birra.nombre}>
                                    {birra.nombre}
                                </option>
                            ))}
                        </select>
                        <div className="invalid-feedback">
                            Debes seleccionar una cerveza.
                        </div>

                        <input
                            type="number"
                            defaultValue="0"
                            className="form-control"
                            id="cantidad"
                            min="1"
                            required
                        />
                        <div className="invalid-feedback">
                            La cantidad de birras debe ser mayor a 0.
                        </div>
                    </div>
                    <button
                        className="col-6 btn btn-success mt-4"
                        onClick={Mandapedido}
                    >
                        ¡Enviar pedido!
                    </button>
                </form>
            </div>

            <div className="col-6">
                <h3>Ficha de la cerveza</h3>
                <FichaBirra cerveza={selectBedida} />
            </div>
        </div>
    )
    
}