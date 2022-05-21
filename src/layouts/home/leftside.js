import react from "react";
import HeaderLink from "../../components/link";
import '../../assests/styles/style.css';
import { Link } from "react-router-dom";
import Brands from "./bottom";
export default function () {
    return (
        <div className="left__side">
            <div>
                <h1>Make</h1>
                <h1>Remote Work</h1>
            </div>
            <p>
                Get your team in sync. no matter your location.
                Stream line processes. create team retuals, and watch productivity soar.
            </p>
            <Link to="./getstarted"> Learn more </Link>
            <Brands/>
        </div>
    )
}