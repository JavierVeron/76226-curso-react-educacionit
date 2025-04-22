import arrayProductos from "../Clase4/json/productos.json"
import BaseComponent from "./BaseComponent"

const withPosts = (BaseComponent) => {
    return (props) => (
        <BaseComponent posts={arrayProductos} {...props} />
    )
}

export const PostsList = (props) => {
    return (
        <ul>
            {
                props.posts.map(item => (
                    <li key={item.id}>{item.nombre} ${item.precio}</li>
                ))
            }
        </ul>
    )
}

export default withPosts(PostsList);