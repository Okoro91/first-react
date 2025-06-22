import "./Hero.css"
import Herotext from "../../block/herotext/Herotext";
const Hero = () => {
    return (
        <div className="hero">
            <Herotext />
            <img src="./image-hero-desktop.png" alt="logo" className="heroImg"/>
        </div>
    )
}

export default Hero;