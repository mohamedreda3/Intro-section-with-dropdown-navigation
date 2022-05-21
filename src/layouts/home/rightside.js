import react from "react";
import '../../assests/styles/style.css';
import homeDecktopImage from '../../assests/images/image-hero-desktop.png'
import homeMobileImage from '../../assests/images/image-hero-mobile.png'
export default function(){
    return(
        <div className="right__side">
            <img src={homeDecktopImage} className="desktop__image"/>
            <img src={homeMobileImage}  className="mobile__image"/>
        </div>
    )
}