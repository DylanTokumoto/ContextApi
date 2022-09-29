import { useContext, useEffect } from "react";

import shopContext from "../context/ShopContext";
import MainNav from "../components/MainNav";

import "./cart.css" 

const CartPage = props => {
    const context = useContext(shopContext)

    useEffect(() => {
        console.log(context)
    }, [])

    return(
        <>
        <MainNav
        cartItemNumber={context.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0)}
        />

        <main className="cart">
            {context.cart.length <= 0 && <p>Sem item no carrinho!</p>}
            <ul>
                {context.cart.map(cartItem => (
                    <li key={cartItem.id}>
                        <div>
                            <strong>{cartItem.title}</strong> - ${cartItem.price} (
                                {cartItem.quantity})
                         </div>
                         <div>
                            <button onClick={context.removeProductFromCart.bind(this,
                            cartItem.id)}>
                                Retirar do carrinho
                            </button>
                         </div>
                    </li>
                ))}
            </ul>
        </main>
        </>
    )
}

export default CartPage