import Header from "./Header";
import { Outlet } from "react-router-dom";

const Root = ({ updateMenu, activateSearch, searchClass, menuClass, activateCart, cartClass, categoryDisplay, overlayClass, carts, CartProducts, totalPrice }) => {
    return (
        <>
            <Header
                updateMenu={updateMenu}
                activateSearch={activateSearch}
                searchClass={searchClass}
                menuClass={menuClass}
                activateCart={activateCart}
                cartClass={cartClass}
                categoryDisplay={categoryDisplay}
                overlayClass={overlayClass}
                carts={carts}
                CartProducts={CartProducts}
                totalPrice={totalPrice}
            />
            <Outlet />
        </>
    )
}

export default Root