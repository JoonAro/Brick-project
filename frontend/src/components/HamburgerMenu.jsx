const HamburgerMenu = ({ menuClass }) => {

  return (
      <nav className={`${menuClass}`}>
        <ul>
          <li>Home</li>
          <li>Categories</li>
          <li>Black Tea</li>
          <li>Green Tea</li>
        </ul>
      </nav>
  )

}

export default HamburgerMenu