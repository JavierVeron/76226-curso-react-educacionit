const BaseComponent = ({children}) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BaseComponent