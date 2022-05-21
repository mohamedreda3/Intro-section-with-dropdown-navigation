import react from "react";
import { KeyboardArrowDownTwoTone } from '@material-ui/icons';
import '../assests/styles/style.css';
import HeaderLink from './link';
export default function (props) {
    return (
        <div className="header__link">
            <HeaderLink name={props.name} />
            <KeyboardArrowDownTwoTone />
        </div>
    )
}