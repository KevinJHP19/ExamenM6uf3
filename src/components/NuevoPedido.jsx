import { bd }  from "../bd/bd"; 

import { useState, useEffect } from "react"; 
import FichaBirra from "./FichaBirra"; 


export default function NuevoPedido(){
    console.log("Nuevo pedido cargado")

    console.log(bd) // Verificando que la base de datos se importe correctamente
    const [selectBedida, setselectBedida] = useState(null);

    useEffect(() => {
        if(selectBedida){
            console.log("Cerveza seleccionada:", selectBedida);
        }
        

    },[selectBedida]) // useEffect para detectar cambios en selectBedida

    //funcion para manjear el evento onChange del select
    const manejarcambio = (event) => {
        const selectedValue = event.target.value; // Obteniendo el valor seleccionado
        const selectedCerveza = bd.find((cerveza) => cerveza.nombre === selectedValue); // Buscando la cerveza en la base de datos
        setselectBedida(selectedCerveza); // Actualizando el estado con la cerveza seleccionada
    };
    
    
    return(
        <div className="row">
            <div className="col-6">
                <h3>Grupo</h3>
                <label htmlFor="nombreGrupo" className="label-control">Nombre del grupo:</label>
                <input type="text" className="form-control mt-2" placeholder="Borrachos de DAW2" />
                <label htmlFor="numeroMesa" className="label-control">Mesa número</label>
                <input type="number" className="form-control mt-2" placeholder="0" />

                <h3 className="mt-5">Haz tu pedido</h3>
                <div className="d-flex gap-3">
                    <select
                        name="cervezas"
                        id="cervezas"
                        className="form-control"
                        onChange={manejarcambio} 
                    >
                        <option value="">Selecciona qué birra quieres</option>
                        {bd.map((birra) => (
                            <option key={birra.id} value={birra.nombre}>
                                {birra.nombre}
                            </option>
                        ))}
                    </select>

                    <input type="number" defaultValue="0" className="form-control" />
                </div>
                <button className="col-6 btn btn-success mt-4">¡Enviar pedido!</button>
            </div>

            <div className="col-6">
                <h3>Ficha de la cerveza</h3>
                <FichaBirra cerveza={selectBedida} />
            </div>
        </div>
    )
    
}