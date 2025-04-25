import { bd }  from "../bd/bd"; // Importando la base de datos



export default function NuevoPedido(){
    console.log("Nuevo pedido cargado")

    console.log(bd) // Verificando que la base de datos se importe correctamente
    
    return(
        <div class="column">
      <div class="col-6">
          <h3>Grupo</h3>
          <label for="nombreGrupo" class="label-control">Nombre del grupo:</label>
          <input type="text" className="form-control mt-2" placeholder="Borrachos de DAW2" />
          <label for="numeroMesa" class="label-control">Mesa numero</label>
          <input type="number" class="form-control mt-2" placeholder="0" />
        
          <h3 class="mt-5">Haz tu pedido</h3>
          <div class="d-flex gap-3 ">
            <select name="cervezas" id="cervezas" class="form-control">
              <option value="">Selecciona qué birra quieres</option>
              {bd.map((birra) => (
                <option key={birra.id} value={birra.nombre}>{birra.nombre}</option>
              ))}
            </select>
          
            <input type="number" value="0" className="form-control" />
            </div>
          </div>
          <button class="col-6 btn btn-success mt-4 " >¡Enviar pedido!</button>
        </div>
    )
    
}