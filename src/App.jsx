import GlobalState from "./context/globalState"
import ProductsPage from "./pages/ProductsPage"
import CartPage from "./pages/cart"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App(props) {
  return (
    <>
      <GlobalState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </GlobalState>
    </>
  )
}

export default App
