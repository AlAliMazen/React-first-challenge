import React from "react";
import css from "./css/Sidebar.module.css";


function Sidbar(){
    return (
        <div className={css.Sidbar}>
            <a href="#." target="_blank">My Photos</a>
            <a href="#." target="_blank">My Illustration</a>
            <a href="#." target="_blank">My Paintings</a>
        </div>
    )
}

export default Sidbar;