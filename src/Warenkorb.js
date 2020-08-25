import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import {Link} from "react-router-dom";
import Buy from "./Buy";


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
                <h1>Deine Produkte:</h1>
                <div className="warenkorballes">
                    <div className="products">
                        {productsInWarenkorb && productsInWarenkorb.map((product) =>
                            <div key={product.id} className="warenkorbprodukte">
                                <Link className="warenkorbnameprice" to={"/product/"+product.id}>
                                    <img src={product.picture}></img><div className="productname">{product.name}</div>
                                    <div className="productprice">{product.price / 100} €</div></Link></div>)}
                        {/* <button onClick={(e) => this.props.delete(product.id)}>DELETE</button> */}
                    </div>
                    <div className="warenkorbbutton">
                        <div className="summe"> Summe: {productsInWarenkorb.length > 0 && productsInWarenkorb.reduce((sum, i) => {
                            sum = sum + (i.price/100);
                            return sum ; 
                        },0)} €

                        </div>
                        <Link to="/buy"><button>WEITER</button></Link>
                    </div>
                </div>
            </div>
        );       
    }
}