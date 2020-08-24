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
        };
    }


    render() {

        const {productsInWarenkorb} = this.props;

        return (
            <div className="warenkorbcontainer">
                <h1>Your Products</h1>
                <div className="warenkorballes">
                    <div className="products">
                        {productsInWarenkorb && productsInWarenkorb.map((product) =>
                            <div key={product.id} className="warenkorbprodukte"><Link className="warenkorbnameprice" to={"/product/"+product.id}><div className="productname">{product.name}</div> <div className="productprice">{product.price / 100}</div> <img src={product.picture}></img></Link><button> DELETE</button></div>)}
                    </div>
                    <div className="summe"> {productsInWarenkorb.length > 0 && productsInWarenkorb.reduce((sum, i) => {
                        sum = sum + (i.price/100);
                        return sum ; 
                    },0)} €

                    </div>
                    <Link to="/buy"><button>Weiter</button></Link>
                </div>
            </div>
        );       
    }
}