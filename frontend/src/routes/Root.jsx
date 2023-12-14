import Header from "./Header";
import { Outlet } from "react-router-dom";

const Root = ({ updateMenu, activateSearch, searchClass, menuClass, categoryDisplay, overlayClass }) => {
    return (
        <>
            <Header
                updateMenu={updateMenu}
                activateSearch={activateSearch}
                searchClass={searchClass}
                menuClass={menuClass}
                categoryDisplay={categoryDisplay} 
                overlayClass={overlayClass}
                />
            <Outlet />
        </>
    )
}

export default Root