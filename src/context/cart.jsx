/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext=createContext();

export function CartProvider({children}){
    const [cart, setCart]=useState([]);

    const addToCart=(prod=>{
        const prodInCartIndex=cart.findIndex(p=>p.id===prod.id)
    if (prodInCartIndex !== -1) {
        const newCart = [...cart];
        newCart[prodInCartIndex].qty += 1;
        setCart(newCart);
    } else {
        setCart((prevState) => [
            ...prevState,
            {
                ...prod,
                qty: 1,
            },
        ]);
    }
        console.log(cart);
    })


const removeFromCart = (prod) => {
    setCart((prevState) => {
        const index = prevState.findIndex((p) => p.id === prod.id);
        if (index !== -1 && cart[index].qty > 1) {
            const newCart = [...cart];
            newCart[index].qty -= 1;
            return newCart;
        } else if (cart[index].qty === 1) {
            const newCart = [...prevState];
            newCart.splice(index, 1);
            return newCart;
        }
        return prevState;
    });
};
    
    const isInCart = (prod) => (cart ? cart.some((p) => p.id === prod.id) : false);

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}