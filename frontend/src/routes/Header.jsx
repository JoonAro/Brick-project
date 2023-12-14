import Search from "../components/Search";
import HamburgerMenu from "../components/HamburgerMenu";

const Header = ({ updateMenu, activateSearch, searchClass, menuClass, categoryDisplay, overlayClass }) => {
    return (
        <>
            <header className="header">
                <div
                    className={`overlay ${overlayClass}`}
                    onClick={() => updateMenu()}
                ></div>
                <div className="header-container">
                    {/* Placeholder logo */}
                    <span className="material-symbols-outlined">
                        emoji_food_beverage
                    </span>
                    <div className="icon-container">
                        <span className="material-symbols-outlined">
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
            </header>
            <Search searchClass={searchClass} />
            <HamburgerMenu menuClass={menuClass} categoryDisplay={categoryDisplay} />
        </>
    )
}

export default Header;