import Header from "./Header";
import { Outlet } from "react-router-dom";

const Root = ({updateMenu, activateSearch, searchClass, menuClass}) => {
    return (
        <>
        <Header 
        updateMenu={updateMenu} 
        activateSearch={activateSearch}
        searchClass={searchClass} 
        menuClass={menuClass}/>
        <Outlet />
        </>
    )
}

export default Root