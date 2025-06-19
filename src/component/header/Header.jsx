import "./Header.css";
import Headernav1 from "../../block/headernav/headernav1/headernav1";
import Headernav2 from "../../block/headernav/headernav2/headernav2";

const Header = () => {
    return (
        <div className="container">
            <img src="../../src\assets\logo.svg" alt="logo" />
            <Headernav1 />
            <Headernav2 />
        </div>
    )
}

export default Header;