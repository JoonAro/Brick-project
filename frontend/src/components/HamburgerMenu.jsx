import { NavLink } from "react-router-dom"

const HamburgerMenu = ({ menuClass, categoryDisplay }) => {

  return (
    <nav className={`${menuClass}`}>
      <ul>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/black_tea' onClick={() => categoryDisplay.current = 1}>Black Tea</NavLink>
        <NavLink to='/green_tea' onClick={() => categoryDisplay.current = 2}>Green Tea</NavLink>
        <NavLink to='jasmin_tea'>Jasmin tea</NavLink>
        <NavLink to='White_tea' onClick={() => categoryDisplay.current = 3}>White tea</NavLink>
        <NavLink to='herbal_tea' onClick={() => categoryDisplay.current = 5}>Herbal tea</NavLink>
        <NavLink to='special_tea' onClick={() => categoryDisplay.current = 4}>Special tea</NavLink>
        <NavLink to='teapots' onClick={() => categoryDisplay.current = 6}>Teapots</NavLink>
      </ul>
    </nav>
  )

}

export default HamburgerMenu