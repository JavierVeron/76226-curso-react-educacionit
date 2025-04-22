import { useContext } from "react"
import CartWidget from "./CartWidget"
import Logo from "./Logo"
import NavBar from "./NavBar"
import { ThemeContext } from "../Clase5/context/ThemeContext"

const Header = () => {
    const {isDarkMode} = useContext(ThemeContext);

    return (
        <div className={`container-fluid py-5 ${isDarkMode ? "footerBK" : ""}`}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <NavBar />
                    </div>
                    <div className="col text-center">
                        <Logo />
                    </div>
                    <div className="col text-end">
                        <CartWidget />
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Header