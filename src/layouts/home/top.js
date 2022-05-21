import react from "react";
import '../../assests/styles/style.css';
import Leftside from "./leftside";
import Rightside from "./rightside";

export default function(){
    return(
        <div className="top">
            <Leftside/>
            <Rightside/>
        </div>
    )
}