export const AGREGAR_PRODUCTO = (id) => ({
    type:"AGREGAR_PRODUCTO",
    payload:id
})

export const ELIMINAR_PRODUCTO = (id) => ({
    type:"ELIMINAR_PRODUCTO",
    payload:id
})

export const VACIAR_CARRITO = ({
    type:"VACIAR_CARRITO"
})

export const INCREMENTAR_ITEM = (id) => ({
    type:"INCREMENTAR_ITEM",
    payload:id
})

export const DECREMENTAR_ITEM = (id) => ({
    type:"DECREMENTAR_ITEM",
    payload:id
})

export const GENERAR_ORDEN = (orden) => ({
    type:"GENERAR_ORDEN",
    payload:orden
})