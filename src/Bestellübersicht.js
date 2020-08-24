import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import {Link, Redirect} from "react-router-dom";

//????? nur evtl einbauen
export default class Bestellübersicht extends React.Component {
    constructor() {
        super();
        this.state = {        
        };
    }

    //ajax call that sends the mailadress
    sendEmail() {
        console.log("this.props", this.props);
        axios.post('/api/v1/buy', {
            email: this.state.email,
            lastname: this.state.lastname,
            firstname: this.state.firstname,
            street: this.state.street,
            city: this.state.city,
            products: this.props.productsInWarenkorb,
        }).then(response => {
            // console.log("Response", response);
            this.props.history.push("/thankyou");
        });
    }



    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }


    render() {

        const {productsInWarenkorb, user} = this.props;


        return(
            
            <div id="bestellübersicht" >
                <div>
                    
                </div>
            </div>

        );
    }
}