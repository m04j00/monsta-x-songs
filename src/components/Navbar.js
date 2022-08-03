import React, { useState } from "react";
import logo from "./logo.png";
import './Navber.css';
function Navbar() {
    return(
        <div class='container'>
            <nav>
            <img class="logo" src={logo}></img>
            <div class="btn-container">
                <button>취향의 발견</button>
                <span class="btn-span"></span>
                <button>MONSTA X</button>
                <span class="btn-span"></span>
                <button class="btn-guest">노래 추가</button>
            </div>
            <div class="logo-none"></div>
            </nav>
        </div>
    )
}
export default Navbar;