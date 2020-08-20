import React from "react";
import ReactDOM from 'react-dom';
import axios from "axios";


export default class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            product: null,
        };
    }

    //ajax request product details
    componentDidMount() {

        const id = this.props.match.params.id; // id aus URL?

        console.log("id", id);
        
        axios.get('/api/v1/details/'+id).then(response => {

            console.log("response", response);

            if(!response.data) {
                this.setState({error: true});
            } else {
                this.setState({product: response.data});
            }

        });

    }

    render() {

        if(!this.state.product) {
            return "no products";
        } else {

            const name = this.state.product.name;
            const picture = this.state.product.picture;
            const description = this.state.product.description;
            const price = this.state.product.price / 100;


            return(
                    
                <div className="detailprodukt">

                    <img className="produktbild" src={picture} alt=""></img>
                    <h1 className="produktname">{name}</h1>
                    <p className="produktdescription">{description}</p>
                    <h3 className="produktprice">{price} €</h3>
                    <input type="number" min="1" max="10" defaultValue="1"></input>
                    <button onClick={(e) => this.props.addToCard(this.state.product)}>In den Warenkorb</button>

                </div>
            );
        }
                
    }
}