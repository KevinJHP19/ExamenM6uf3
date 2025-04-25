import { createContext, useState } from "react";

// Crear el contexto
export const PedidoContext = createContext();

// Proveedor del contexto
export function PedidoProvider({ children }) {
    const [pedidos, setPedidos] = useState([
        {
            id: 1,
            grupo: "Borrachos de DAW2",
            numeromesa: 0,
            cerveza: "Cerveza 1",
            cantidad: 2,
            estado: "pendiente",
        },
        {
            id: 2,
            grupo: "Los de la tarde",
            numeromesa: 1,
            cerveza: "Cerveza 2",
            cantidad: 3,
            estado: "pendiente",
        },
        {
            id: 3,
            grupo: "Los de la noche",
            numeromesa: 2,
            cerveza: "Cerveza 3",
            cantidad: 4,
            estado: "pendiente",
        },
    ]);

    const [selectBedida, setselectBedida] = useState(null);

    // Función para agregar un nuevo pedido
    const agregarPedido = (nuevoPedido) => {
        setPedidos([...pedidos, nuevoPedido]);
    };

    return (
        <PedidoContext.Provider value={{ pedidos, agregarPedido, selectBedida, setselectBedida, setPedidos }}>
            {children}
        </PedidoContext.Provider>
    );
}