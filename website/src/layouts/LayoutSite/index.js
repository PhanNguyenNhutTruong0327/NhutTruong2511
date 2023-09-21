import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function LayoutSite(props) {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>


    )
}

export default LayoutSite;