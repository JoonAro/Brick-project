import Header from "./Header";
import { Outlet } from "react-router-dom";

const Root = ({ updateMenu, activateSearch, searchClass, menuClass, activateCart, cartClass, categoryDisplay, overlayClass, carts, CartProducts }) => {
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
            />
            <Outlet />
        </>
    )
}

export default Root