import React from "react"
import { useState } from "react"

// const [shop, setShop] = useState([])
// fetch("http://54.177.105.189:8081/products").then(response => response.json())
// .then(responseEmJson => setShop(responseEmJson))

export default React.createContext({
    
    products: [
        shop
    ], 
    cart: [],
    addProduct: product => {},
    removeProductFromCart: productId => {}
})