import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import ContactIcon from "../Shared/ContactIcon";

const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ContactIcon></ContactIcon>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;