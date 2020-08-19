import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";


// export default class Overview extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             products: null,
//         };
//     }

//     componentDidMount() {
        
//         axios.get('/api/v1/products').then(response => {

//             console.log("response", response);

//             if(!response.data) {
//                 this.setState({error: true});
//             } else {
//                 this.setState({products: response.data});
//             }

//         });
//     }
    
//     render () {

//         const name = this.state.products.name;
//         // const img = this.state.products.picture;
//         // const id = this.state.products.id;
//         // const article_number = this.state.products.article_number;

//         return (

//             <div>
//                 <h1>{name}</h1>
//                 {/* <img src={img} alt=""></img> */}
//             </div>
    
//         );
//     }
// };


export default function AllProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        async function getProducts() {
            
            const { data } = await axios.get("/api/v1/products");
            console.log("data:", data);
            setProducts(data.products);
        }

        getProducts();

    }, []);

    return (

        <div className="overview_products">
            {products.map((product) => (
                <div key={product.id}>
                    <div id="produktbild">
                        <img src={product.picture}></img>
                    </div>
                    <div id="produktname">
                        {product.name}
                    </div>
                </div>
            ))}
        </div>
    );

}
