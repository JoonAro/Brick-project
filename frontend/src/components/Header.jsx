const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                {/* Placeholder logo */}
                <span className="material-symbols-outlined">
                    emoji_food_beverage
                </span>
                <div className="icon-container">
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                    <span className="material-symbols-outlined">
                        search
                    </span>
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header;