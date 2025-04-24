import { useEffect, useState } from "react";
import APIClient from "./APIClient";
import Loading from "./Loading";

const APIAxios = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const axiosResponse = await APIClient.get("/products");            
            setPosts(axiosResponse.data);
            setLoading(false);
        })();
    }, [])

    return (
        <>
        {loading ? <Loading /> : <div className="container my-5 bg-white">
            <div className="row">
                <div className="col">
                    <h1>API Axios</h1>
                    <ul className="list-group list-group-flush">
                        {posts.map(item => (
                            <li key={item.id} className="list-group-item">{item.title} ${item.price}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>}
        </>
    )
}

export default APIAxios