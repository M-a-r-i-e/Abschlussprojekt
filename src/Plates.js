import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import {Link} from "react-router-dom";


export default function Plates() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        async function getProducts() {
            
            const { data } = await axios.get("/api/v1/products/plates");
            console.log("data:", data);
            setProducts(data.products);
        }

        getProducts();

    }, []);

    return (

        <div className="overview_products">
            {products.map((product) => (
                <div key={product.id}>
                    <Link className="linkprodukt" to={"/product/"+product.id}> 
                        <div className="produktbild">
                            <img src={product.picture}></img>
                        </div>
                        <div className="produktname">
                            {product.name} - {product.price / 100} €
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );

}
