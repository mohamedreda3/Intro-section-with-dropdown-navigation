import React from "react";
import '../assests/styles/style.css';
export default function (props) {
    return (
        <div className="image">
            <img src={props.source}/>
        </div>
    )
}