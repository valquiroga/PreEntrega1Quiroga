import { Link,useNavigate } from "react-router-dom"
const Item =({id,name,img,price,stock}) => {
    const navigate =useNavigate ()
    return (
        <article className="CardItem">
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <header className="Header">
                    <p className="ItemHeader">
                        {name}
                    </p>
            </header>
            <section>
                <p className="Info">
                    $ {price}
                </p>
            </section>
            <footer className='ItemFooter'>
                <button onClick={()=>navigate(`/item/${id}`)} className='Option'>Ver detalle</button> 
                {/* <Link to={`/item/${id}`}>Ver producto</Link> */}
            </footer>
        </article>
    ) 
}
export default Item