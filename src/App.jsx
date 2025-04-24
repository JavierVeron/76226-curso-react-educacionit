import { Routes, Route } from "react-router-dom" 
import Header from "./Clase4/Header"
import Footer from "./Clase4/Footer"
import Principal from "./Clase4/Principal"
import MiBK from "./Clase4/MiBK"
import Productos from "./Clase4/Productos"
import Item from "./Clase4/Item"
import Layout from "./Clase5/Layout"
import ThemeContextProvider from "./Clase5/context/ThemeContext"
import CartContextProvider from "./Clase5/context/CartContext"
import Carrito from "./Clase5/Carrito"
import APIXML from "./Clase6/APIXML"
import APIFetch from "./Clase6/APIFetch"
import APIAxios from "./Clase6/APIAxios"

function App() {
  return (
    <>
      <CartContextProvider>
        <ThemeContextProvider>
          {/* <Header />
          <Routes>
          <Route path={"/"} element={<Principal />} />
            <Route path={"/productos"} element={<Productos />} />
            <Route path={"/categoria/:id"} element={<Productos />} />
            <Route path={"/mi-bk"} element={<MiBK estaLogueado={true} />} />
            <Route path={"/item/:id"} element={<Item />} />
            <Route path={"/carrito"} element={<Carrito />} />
          </Routes>
          <Footer /> */}

          <APIAxios />
        </ThemeContextProvider>
      </CartContextProvider>
    </>
  )
}

export default App
