import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, img, category, description, price, stock }) =>{
    return (
        <article className="CardItem">
            <header className="Header">
                <h3 className="ItemHeader">
                    {name}
                </h3>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    $ {price}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log ('Cantidad agregada ',quantity)}/>
            </footer>
            <p className="Info">
                    Stock en tienda online: {stock}
                </p>
        </article>
    )
}

export default ItemDetail