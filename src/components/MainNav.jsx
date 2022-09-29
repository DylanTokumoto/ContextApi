import {NavLink} from "react-router-dom"

import "./MainNav.css"

const MainNav = props => (
    <header className="mainNav">
        <nav>
            <ul>
                <li>
                    <NavLink to="/">products</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">Cart ({props.cartItemNumber})</NavLink>
                </li>
            </ul>
        </nav>
    </header>
)

export default MainNav