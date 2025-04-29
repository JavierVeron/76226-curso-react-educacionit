import productosJson from "../../Clase4/json/productos.json";

const ecommerce = {
    products:productosJson,
    cart:[],
    total:0,
    suma:0
}

const CartReducer = (state = ecommerce, action) => {
    let product;
    let productsFiltered;

    switch(action.type) {
        case "AGREGAR_PRODUCTO":            
            product = state.products.find(item => item.id == action.payload);
            state.cart.push(product);

            return {
                ...state,
                cart:state.cart,
                total:state.cart.length,
                suma:state.cart.reduce((acum, item) => acum += item.precio, 0)
            }
        case "ELIMINAR_PRODUCTO":
            productsFiltered = state.cart.filter(item => item.id != action.payload);

            return {
                ...state,
                cart:productsFiltered,
                total:productsFiltered.length,
                suma:productsFiltered.reduce((acum, item) => acum += item.precio, 0)
            }
        case "VACIAR_CARRITO":            
            return {
                ...state,
                cart:[],
                total:0,
                suma:0
            }
        default:
            return state;
    }
}

export default CartReducer