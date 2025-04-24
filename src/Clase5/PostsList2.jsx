import { useState } from "react";
import useAPI from "./useAPI"

const PostsList2 = () => {
    const data = useAPI("https://jsonplaceholder.typicode.com/users");

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Custom Hooks</h1>
                    <ul>
                        {data.map(item => (
                            <li>{item.id} - {item.name} ({item.username}) - {item.email}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PostsList2