import productosJson from "../../Clase4/json/productos.json";

const ecommerce = {
    products:productosJson,
    cart:[],
    orders:[],
    total:0,
    suma:0
}

const CartReducer = (state = ecommerce, action) => {
    let product;
    let productsFiltered;
    let orders;

    switch(action.type) {
        case "AGREGAR_PRODUCTO":            
            product = state.cart.find(item => item.id == action.payload);

            if (product) {
                product.cantidad++;
            } else {
                product = state.products.find(item => item.id == action.payload);
                product.cantidad = 1;
                state.cart.push(product);
            }            

            return {
                ...state,
                cart:state.cart,
                total:state.cart.reduce((acum, item) => acum += item.cantidad, 0),
                suma:state.cart.reduce((acum, item) => acum += item.precio * item.cantidad, 0)
            }
        case "ELIMINAR_PRODUCTO":
            productsFiltered = state.cart.filter(item => item.id != action.payload);

            return {
                ...state,
                cart:productsFiltered,
                total:productsFiltered.reduce((acum, item) => acum += item.cantidad, 0),
                suma:productsFiltered.reduce((acum, item) => acum += item.precio * item.cantidad, 0)
            }
        case "VACIAR_CARRITO":            
            return {
                ...state,
                cart:[],
                total:0,
                suma:0
            }
        case "INCREMENTAR_ITEM":
            product = state.cart.find(item => item.id == action.payload);
            product.cantidad++;

            return {
                ...state,
                cart:state.cart,
                total:state.cart.reduce((acum, item) => acum += item.cantidad, 0),
                suma:state.cart.reduce((acum, item) => acum += item.precio * item.cantidad, 0)
            }
        case "DECREMENTAR_ITEM":
            product = state.cart.find(item => item.id == action.payload);

            if (product.cantidad > 1) {
                product.cantidad--;
            }

            return {
                ...state,
                cart:state.cart,
                total:state.cart.reduce((acum, item) => acum += item.cantidad, 0),
                suma:state.cart.reduce((acum, item) => acum += item.precio * item.cantidad, 0)
            }
        case "GENERAR_ORDEN":
            const id = state.orders.length + 1;
            const cantProductos = action.payload.items.reduce((acum, item) => acum += item.cantidad, 0)
            state.orders.push({id:id, ...action.payload, cantProductos});

            return {
                ...state,
                cart:[],
                total:0,
                suma:0,
                orders:state.orders
            }
        default:
            return state;
    }
}

export default CartReducer