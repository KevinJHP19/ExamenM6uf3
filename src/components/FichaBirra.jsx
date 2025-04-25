export default function FichaBirra({ cerveza }) {
    console.log("Ficha birra cargada");

    if (!cerveza) {
        return <p>Selecciona una cerveza para ver la información.</p>;
    }

    return (
        <div className="col-6 w-100 " height="500px">
            <div className="p-3 d-flex">
                <img src={cerveza.imagen} alt={cerveza.cerveza} className="w-100 "  style={{height:'600px'}}/>
            </div>
            <div>
                <h4>{cerveza.nombre}</h4>
                <p>{cerveza.descripcion}</p>
            </div>
        </div>
    );
}