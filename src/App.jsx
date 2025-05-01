import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Header from "./Clase4/Header"
import Footer from "./Clase4/Footer"
import Principal from "./Clase4/Principal"
import MiBK from "./Clase4/MiBK"
import Productos from "./Clase4/Productos"
import Item from "./Clase4/Item"
import ThemeContextProvider from "./Clase5/context/ThemeContext"
import CartContextProvider from "./Clase5/context/CartContext"
import Carrito from "./Clase5/Carrito"
import Checkout from "./Clase8/Checkout"
import Ordenes from "./Clase8/Ordenes"
//import Contador from "./Clase8/Contador"

function App() {
  return (
    <>
      <CartContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <Header />
            <Routes>
            <Route path={"/"} element={<Principal />} />
              <Route path={"/productos"} element={<Productos />} />
              <Route path={"/categoria/:id"} element={<Productos />} />
              <Route path={"/mi-bk"} element={<MiBK estaLogueado={true} />} />
              <Route path={"/item/:id"} element={<Item />} />
              <Route path={"/carrito"} element={<Carrito />} />
              <Route path={"/checkout"} element={<Checkout />} />
              <Route path={"/ordenes"} element={<Ordenes />} />
            </Routes>
            <Footer />

            {/* <Contador /> */}
          </BrowserRouter>
        </ThemeContextProvider>
      </CartContextProvider>
    </>
  )
}

export default App
