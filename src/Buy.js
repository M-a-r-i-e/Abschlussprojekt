import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import {Link} from "react-router-dom";


export default function Warenkorb() {
    return (
        <div id="warenkorb" >
            <div>
                <input placeholder="FIRSTNAME"></input>
                <input placeholder="LASTNAME"></input>
                <input placeholder="STREET"></input>
                <input placeholder="NR"></input>
                <input placeholder="CITY"></input>
                <input placeholder="PLZ"></input>
                <input placeholder="EMAIL"></input>
                <input placeholder="COMMENTS"></input>
                <button>BUY NOW</button>

            </div>
        </div>
    );
}