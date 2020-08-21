import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import {Link} from "react-router-dom";
import Buy from "./Buy";


// export default function Warenkorb() {
//     return (
//         <div id="warenkorb" >
//             <div>
//                 <p>Your Products</p>
//             </div>
//         </div>
//     );
// }


export default class Warenkorb extends React.Component {
    constructor() {
        super();
        this.state = {
            total: 0,
        };
    }

    render() {

        const {productsInWarenkorb} = this.props;

        return (
            <div>
                <h1>Your Products</h1>
                <div className="users">
                    {productsInWarenkorb && productsInWarenkorb.map((product) =>
                        <div key={product.id} className="warenkorbprodukte"><Link to={"/product/"+product.id}>{product.name} {product.price / 100} <img src={product.picture}></img></Link></div>)}
                </div>
                <Link to="/buy"><button>Weiter</button></Link>
            </div>
        );       
    }
}