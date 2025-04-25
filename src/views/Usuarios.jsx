import NuevoPedido from "../components/NuevoPedido"
export default function Usuarios(){
    console.log("Usuarios cargado")
    return(
        <div className="container mt-3 p-5 border shadow-lg ">
      <h1 class="text-center mb-5 ">----- Vista usuario -----</h1>
        <NuevoPedido/>
        
        <div class="col-6 border ">
          <div class="p-3 d-flex">
              <img src="estrella.jpg" alt="" className="w-100" />
              <img src="estrella.jpg" alt="" class="w-100" />
            </div>
            <div>
              <h4 class="">Estrella Galicia</h4>
              <p>Cerveza suave y equilibrada con un sabor ligeramente amargo y aroma a malta.</p>
            </div>
            
  
          </div>
        </div>
            
    );

}