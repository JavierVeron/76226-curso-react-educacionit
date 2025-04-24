import { useEffect, useState } from "react";

const useAPI = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {        
        fetch(url)
        .then(r => r.json())
        .then(d => {
            setData(d)
        })
    }, [url])

    return data;
}

export default useAPI