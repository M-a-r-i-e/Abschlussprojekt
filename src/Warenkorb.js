import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import {Link} from "react-router-dom";


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
    }

    render() {

        const {productsInWarenkorb} = this.props;

        return (
            <div>
                <h1>Your Products</h1>
                <div className="users">
                    {productsInWarenkorb && productsInWarenkorb.map((product) => <div key={product.id} className="warenkorbprodukte"><Link to={"/product/"+product.id}>{product.name} {product.price / 100} <img src={product.picture}></img></Link></div>)}
                </div>
            </div>
        );
        
    }
}