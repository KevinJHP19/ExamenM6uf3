export default function NuevoPedido(){
    console.log("Nuevo pedido cargado")

    return(
        <div class="row">
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
              <option value="">Estrella Galicia</option>
            </select>
          
            <input type="number" value="0" className="form-control" />
            </div>
          </div>
          <button class="btn btn-success mt-4 w-100">¡Enviar pedido!</button>
        </div>
    )
    
}