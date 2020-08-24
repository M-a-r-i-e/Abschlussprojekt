import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import {Link} from "react-router-dom";
import Buy from "./Buy";


export default class Thankyou extends React.Component {
    constructor() {
        super();
    }

    render() {

        const {user} = this.props;
        console.log("userprops", user);

        return (
            <div id="thanks" >
                <div>
                    <div>
                        <h1>Vielen Dank für deinen Einkauf {user.firstname}!</h1>
                    </div>
                </div>
            </div>
        );
    }
}