import Header from "./Header";
import { Outlet } from "react-router-dom";

const Root = ({ updateMenu, activateSearch, searchClass, menuClass, categoryDisplay }) => {
    return (
        <>
            <Header
                updateMenu={updateMenu}
                activateSearch={activateSearch}
                searchClass={searchClass}
                menuClass={menuClass}
                categoryDisplay={categoryDisplay} />

            <Outlet />
        </>
    )
}

export default Root