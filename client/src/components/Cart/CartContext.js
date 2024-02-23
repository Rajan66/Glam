import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])


    const [itemAmount, setItemAmount] = useState(0)

    const [total, setTotal] = useState(0)

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Update localStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);


    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount
        }, 0)
        setTotal(total)
    })

    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount
            }, 0)
            setItemAmount(amount)
        }
    }, [cart])


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
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter(item => {
            return item._id !== id
        })
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const increaseAmount = (id) => {
        const cartItem = cart.find(item => item._id === id)
        addToCart(cartItem, id)
        console.log('amount increased')
    }

    const decreaseAmount = (id) => {
        const cartItem = cart.find(item => {
            return item._id === id
        })
        if (cartItem) {
            const newCart = cart.map(item => {
                if (item._id === id) {
                    return { ...item, amount: cartItem.amount - 1 }
                } else {
                    return item
                }
            })
            setCart(newCart)
        }
        if (cartItem.amount < 2) {
            removeFromCart(id)
        }
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            increaseAmount,
            decreaseAmount,
            itemAmount,
            total,
        }}>{children}</CartContext.Provider>
    )
}

export default CartProvider