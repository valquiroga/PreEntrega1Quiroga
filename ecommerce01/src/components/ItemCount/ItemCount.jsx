import { useCount } from "../hooks/useCount"

const ItemCount =({stock, initial, onAdd})=> {
    const {quantity,decrement,increment}=useCount(initial)
    return (
        <>
        <div className='Counter'>
            <div className='Controls'>
                <button className="Button" onClick={decrement}>-</button>
                <p className='Number'>{quantity}</p>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={()=>onAdd(quantity)}disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
        </>
    )
}
export default ItemCount
