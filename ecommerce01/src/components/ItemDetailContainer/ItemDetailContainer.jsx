import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [ product, setProduct] = useState (null)
    const {itemId} = useParams ()
    useEffect (()=>{
        getProductById (itemId)
        .then (response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    if (!product) {
        return <h2>¯\_(ツ)_/¯</h2>
    }
    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer