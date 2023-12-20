import Search from "../components/Search";
import HamburgerMenu from "../components/HamburgerMenu";
import Cart from "../components/Cart";
import { NavLink } from 'react-router-dom';
const Header = ({ updateMenu, activateSearch, searchClass, menuClass, activateCart, cartClass, categoryDisplay, overlayClass, carts, CartProducts, totalPrice, getCartGoing }) => {
    return (
        <>
            <header className="header">
                <div
                    className={`overlay ${overlayClass}`}
                    onClick={() => updateMenu()}
                ></div>
                <div className="header-container">
                    {/* Placeholder logo */}
                    <NavLink to={'/'}>
                        <span className="material-symbols-outlined">
                            emoji_food_beverage
                        </span>
                    </NavLink>
                    <div className="icon-container">
                        <span onClick={() => activateCart()} className="material-symbols-outlined">
                            <div className="productInCartSignal"><div className={carts.length === 0 ? "" : "signal"}></div></div>
                            shopping_cart
                        </span>
                        <span onClick={() => activateSearch()} className="material-symbols-outlined">
                            search
                        </span>
                        <span onClick={() => updateMenu()} className={`material-symbols-outlined`} >
                            menu
                        </span>
                    </div>
                </div>
                <div className="productInCartSignal"></div>
            </header>
            <Search searchClass={searchClass} />
            <Cart cartClass={cartClass} CartProducts={CartProducts} carts={carts} totalPrice={totalPrice} getCartGoing={getCartGoing} />
            <HamburgerMenu menuClass={menuClass} categoryDisplay={categoryDisplay} />
            <div id="lineBelowHeader"></div>
        </>
    )
}
export default Header;