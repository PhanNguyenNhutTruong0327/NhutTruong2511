import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function LayoutAdmin() {
    return ( 
        <div className="all-admin">
            <Header/>
            <section className="maincontent">
                <div className="container-fluid my-3">
                    <Outlet />
                </div>
            </section>
            <Footer/>
        </div>
     );
}

export default LayoutAdmin;