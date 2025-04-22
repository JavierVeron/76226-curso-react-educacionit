import BaseLayout from "./BaseLayout"

const Layout = ({children, curso, clase}) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h2 className="fw-bold">{curso}</h2>
                    <BaseLayout clase={clase}>
                        {children}
                    </BaseLayout>
                </div>
            </div>
        </div>
    )
}

export default Layout