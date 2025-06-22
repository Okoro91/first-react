import "./Header.css";
import Headernav1 from "../../block/headernav/headernav1/headernav1";
import Headernav2 from "../../block/headernav/headernav2/headernav2";

const Header = () => {
    return (
        <div className="header">
            <img src="./logo.svg" alt="logo" className="logo"/>
            <div className="headernav">
                 <Headernav1 />
            <Headernav2 />
            </div>
        </div>
    )
}

export default Header;