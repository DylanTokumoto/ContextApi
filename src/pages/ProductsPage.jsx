import shopContext from "../context/ShopContext";
import MainNav from "../components/MainNav";


import "./products.css" 

const ProductsPage = props => {
    return (
        <shopContext.Consumer>
            {context => (
                <>
                <MainNav cartItemNumber={context.cart.reduce((count, curItem) => {
                    return count + curItem.quantity;
                }, 0)}
                />
                <main className="products">
                    <ul>
                        {context.products.map(product => (
                            <li key={product.id}>
                                <div>
                                    <strong>{product.title}</strong> - ${product.price}
                                </div>
                                <div>
                                    <button
                                    onClick={context.addProduct.bind(this, product)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </main>
                </>
            )}
        </shopContext.Consumer>
    )
}

export default ProductsPage