import { Routes, Route, useRoutes } from "react-router-dom" 
import Header from "./Clase4/Header"
import Footer from "./Clase4/Footer"
import Principal from "./Clase4/Principal"
import MiBK from "./Clase4/MiBK"
import Productos from "./Clase4/Productos"
import Item from "./Clase4/Item"

function App() {
  /* const routes = useRoutes([
    {path:"/", element:<Principal />},
    {path:"/productos", element:<Productos />},
    {path:"/mi-bk", element:<MiBK estaLogueado={true} />}
  ]);

  return (
    <>
      <Header />
      {routes}
      <Footer />
    </>
  ) */

  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Principal />} />
        <Route path={"/productos"} element={<Productos />} />
        <Route path={"/categoria/:id"} element={<Productos />} />
        <Route path={"/mi-bk"} element={<MiBK estaLogueado={true} />} />
        <Route path={"/item/:id"} element={<Item />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
