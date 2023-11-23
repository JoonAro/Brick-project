const HamburgerMenu = ({updateMenu}) => {

    return (
        <main>
        <nav className={`${menuClass}`}>
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>Black Tea</li>
            <li>Green Tea</li>
          </ul>
        </nav>
      </main>
    )

}

export default HamburgerMenu