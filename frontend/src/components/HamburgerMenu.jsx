const HamburgerMenu = ({updateMenu}) => {

    return (
        <nav>

        <span onClick={() => console.log(updateMenu)} className={`material-symbols-outlined`} >
            menu
        </span>
        </nav>
    )

}

export default HamburgerMenu