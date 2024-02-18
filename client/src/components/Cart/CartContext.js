import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addToCart = (product, id) => {
        // if the item is new to the cart
        const newItem = { ...product, amount: 1 }
        const cartItem = cart.find((item) => {
            return item._id === id
        })
        // if cart item is already in the cart
        if (cartItem) {
            const newCart = [...cart].map(item => {
                if (item._id === id) {
                    return { ...item, amount: cartItem.amount + 1 }
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, newItem])
        }
        console.log(`${product.title} added to cart`)
    }
    console.log(cart)
    return (
        <CartContext.Provider value={{ addToCart }}>{children}</CartContext.Provider>
    )
}

export default CartProvider