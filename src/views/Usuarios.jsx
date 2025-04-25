import NuevoPedido from "../components/NuevoPedido"
import FichaBirra from "../components/FichaBirra"
export default function Usuarios(){
    console.log("Usuarios cargado")
    return(
        <div className="container mt-3 p-5 border shadow-lg ">
      <h1 class="text-center mb-5 ">----- Vista usuario -----</h1>
      <div className="d-flex gap-5">
      <NuevoPedido/>
      <FichaBirra/>
      </div>
        
        
        
        </div>
            
    );

}