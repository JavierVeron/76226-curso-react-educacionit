import { useState } from "react"
import CurrencyField from "./CurrencyField";

const Calculator = () => {
    const [value, setValue] = useState(0);
    const [divisa, setDivisa] = useState("");
    const cambio = 1250;

    const handleARSChange = (valor) => {        
        setDivisa("ARS");
        setValue(valor);
    }

    const handleUSDChange = (valor) => {
        setDivisa("USD");
        setValue(valor);
    }

    const arsValue = divisa == "ARS" ? value : value * cambio;
    const usdValue = divisa == "USD" ? value : value / cambio;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Calculadora</h1>
                    <form>
                        <CurrencyField divisa={"ARS"} value={arsValue} onChange={handleARSChange} />
                        <CurrencyField divisa={"USD"} value={usdValue} onChange={handleUSDChange} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Calculator