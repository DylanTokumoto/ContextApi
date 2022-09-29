import { useReducer, useState } from "react"
import ShopContext from "./ShopContext"

import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducer"


const GlobalState = props => {

    const [listProducts, setList] = useState([])
    fetch("http://54.177.105.189:8081/products").then(response => response.json())
    .then(responseEmJson => setList(responseEmJson))
    // console.log(listProducts)
    const products = listProducts

    const [cart, setCart] = useState([])
    // const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

    const addProduct = product => {
        setTimeout(() => {
            setCart(updatedCart)
            // dispatch({ type: ADD_PRODUCT, product: product });
        }, 300)
    }

    const removeProductFromCart = productId => {
        setTimeout(() => {
            setCart(updatedCart)
            // dispatch({ type: REMOVE_PRODUCT, productId: productId });
        }, 300)
    }

return (
    <ShopContext.Provider
    value={{
        products: products,
        cart: cart.cart,
        addProduct: addProduct,
        removeProductFromCart: removeProductFromCart
    }}
    >
        {props.children}
    </ShopContext.Provider>
)

}

export default GlobalState;

