import { NavLink } from "react-router-dom"

const HamburgerMenu = ({ menuClass }) => {

  return (
      <nav className={`${menuClass}`}>
        <ul>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/black_tea'>Black Tea</NavLink>
          <NavLink to='/green_tea'>Green Tea</NavLink>
          <NavLink to='jasmin_tea'>Jasmin tea</NavLink>
          <NavLink to='herbal_tea'>Herbal tea</NavLink>
          <NavLink to='special_tea'>Special tea</NavLink>
        </ul>
      </nav>
  )

}

export default HamburgerMenu