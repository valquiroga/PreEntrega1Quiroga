import { useState } from "react"

export const useCount =(initial) => {
    const [quantity, setQuantity] = useState(initial)
    const increment = () => {
        //if (quantity < stock) {
            setQuantity(quantity+1)
        //}
    } 
    const decrement = () => {
        if (quantity>1) {
            setQuantity (quantity-1)
        }
    }
    return{
        quantity,
        decrement,
        increment
    }
}