import { Routes, Route } from "react-router-dom" 
import Header from "./Clase4/Header"
import Footer from "./Clase4/Footer"
import Principal from "./Clase4/Principal"
import MiBK from "./Clase4/MiBK"
import Productos from "./Clase4/Productos"
import Item from "./Clase4/Item"
import Layout from "./Clase5/Layout"
import HOC, { PostsList } from "./Clase5/HOC"
import ThemeContextProvider from "./Clase5/context/ThemeContext"
import CartContextProvider from "./Clase5/context/CartContext"
import Carrito from "./Clase5/Carrito"

function App() {
  return (
    <>
      <CartContextProvider>
        <ThemeContextProvider>
          <Header />
          <Routes>
          <Route path={"/"} element={<Principal />} />
            <Route path={"/productos"} element={<Productos />} />
            <Route path={"/categoria/:id"} element={<Productos />} />
            <Route path={"/mi-bk"} element={<MiBK estaLogueado={true} />} />
            <Route path={"/item/:id"} element={<Item />} />
            <Route path={"/carrito"} element={<Carrito />} />
          </Routes>
          <Footer />

        {/* <Layout curso={"Javascript desde cero"} clase={"text-primary fs-2"}>
          <p>Aprende a programar con el lenguaje más utilizado en internet para el desarrollo frontend de sitios web.</p>
          <ul>
            <li>Fundamentos de la programación.</li>
            <li>Declaración y utilización de variables.</li>
            <li>Tipos de datos.</li>
            </ul>
            </Layout>
            <Layout curso={"Javascript Desarrollador Avanzado"} clase={"text-secondary fs-4"}>
            <p>Domina el desarrollo del lado del cliente y conviértete en Front End Web Developer. Aprende a utilizar JavaScript para crear experiencias altamente interactivas.</p>
            <ul>
            <li>Modelo Orientado a Eventos.</li>
            <li>Validación de datos.</li>
            <li>Realizar pedidos asincrónicos.</li>
            </ul>
            </Layout> */}

        {/* <HOC /> */}
        </ThemeContextProvider>
      </CartContextProvider>
    </>
  )
}

export default App
