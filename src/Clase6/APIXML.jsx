import { useEffect, useState } from "react"
import Loading from "./Loading";

const APIXML = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("Remeron Rustico Over Iggy Negro");
    const [price, setPrice] = useState("54990");
    const [description, setDescription] = useState("Remeron escote redondo, con detalles de bordador en escote y mandas. Cuenta con proceso de lavado y desgaste snow. Calce oversize. Tela pesada.");
    const [category, setCategory] = useState("remeras");
    const [image, setImage] = useState("https://vcp.com.ar/cdn/shop/files/REMERA_IGGY_NEGRA_1.jpg?v=1744901682&width=700");
    const [id, setId] = useState(0);

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("GET", "https://fakestoreapi.com/products/");
        xhr.send();
        xhr.addEventListener("load", () => {
            setPosts(xhr.response);
            setLoading(false);
        })
    }, [])

    const addProduct = () => {
        const data = new FormData();
        data.append("title", title);
        data.append("price", price);
        data.append("description", description);
        data.append("category", category);
        data.append("image", image);
        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("POST", "https://fakestoreapi.com/products/");
        xhr.send(data);
        xhr.addEventListener("load", () => {
            clear();
            xhr.response.id && setId(xhr.response.id);
            console.log(xhr.response);
        })
    }

    const clear = () => {
        setTitle("");
        setPrice("");
        setDescription("");
        setCategory("");
        setImage("");
    }

    return (
        <>
        {loading ? <Loading /> : <div className="container my-5 bg-white">
            <div className="row">
                <div className="col">
                    <h1>API XmlHttpRequest</h1>
                    <ul className="list-group list-group-flush">
                        {posts.map(item => (
                            <li key={item.id} className="list-group-item">{item.title} ${item.price}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>}
        <div className="container my-5 py-5 bg-white">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" value={title} onInput={(e) => {setTitle(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input type="text" className="form-control" value={price} onInput={(e) => {setPrice(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <input type="text" className="form-control" value={description} onInput={(e) => {setDescription(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Category</label>
                            <input type="text" className="form-control" value={category} onInput={(e) => {setCategory(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image</label>
                            <input type="text" className="form-control" value={image} onInput={(e) => {setImage(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={addProduct}>Enviar</button>
                    </form>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {id ? <h3>Los datos se guardaron correctamente!</h3> : ""}
                </div>
            </div>
        </div>
        </>
    )
}

export default APIXML