const BaseLayout = ({children, clase}) => {    
    return (
        <div className={clase}>
            {children}
        </div>
    )
}

export default BaseLayout