import { useState, useEffect } from "react"
import { getProducts, getProductByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

import { useParams } from "react-router-dom"

const ItemListConteiner = ({greeting}) => {
    const [products, setProducts] =useState ([])

    const {categoryId} = useParams ()

    useEffect (()=>{
        const asyncFunc = categoryId ? getProductByCategory : getProducts
        
        asyncFunc(categoryId)
        .then(response => {
            setProducts (response)
        })
        .catch(error => {
            console.error(error)
        })
        // getProducts()
        // .then (response => {
        //     setProducts(response)
        // })
        // .catch(error => {
        //     console.error(error)
        // })
    }, [categoryId])
    return (
        <>
        <p>{greeting}</p>
        <ItemList products={products}/>
        </>
    )
}

export default ItemListConteiner