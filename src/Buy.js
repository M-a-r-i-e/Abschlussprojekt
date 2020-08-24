import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import {Link, Redirect} from "react-router-dom";


export default class Buy extends React.Component {
    constructor() {
        super();
        this.state = {
            products: "",
            email: "",
            lastname: "",
            firstname: "",
            street: "",
            number: "",
            city: "",
            comments: "",         
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
            number: this.state.number,
            city: this.state.city,
            plz: this.state.plz,
            products: this.props.productsInWarenkorb,
        }).then(response => {
            // console.log("Response", response);
            this.props.history.push("/thankyou");
            this.props.userData(this.state);
            this.props.reset([]);
        });
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }


    render() {

        const {productsInWarenkorb} = this.props;

        return(
            
            <div id="dateneingabecontainer" >
                <div className="dateneingabe">
                    <input type="text" name="email" placeholder="DEINE EMAIL" onChange={(event) => this.handleChange(event)}></input>
                    <input type="text" name="firstname" placeholder="DEIN VORNAME" onChange={(event) => this.handleChange(event)}></input>
                    <input type="text" name="lastname" placeholder="DEIN NACHNAME" onChange={(event) => this.handleChange(event)}></input>                  
                    <input type="text" name="street" placeholder="STRAßE" onChange={(event) => this.handleChange(event)}></input>
                    <input type="text" name="number" placeholder="HAUSNUMMER" onChange={(event) => this.handleChange(event)}></input>
                    <input type="text" name="city" placeholder="STADT" onChange={(event) => this.handleChange(event)}></input>
                    <input type="text" name="plz" placeholder="PLZ" onChange={(event) => this.handleChange(event)}></input>
                    <input type="text" name="comments" placeholder="KOMMENTAR" onChange={(event) => this.handleChange(event)}></input>
                    <button onClick={(e) => this.sendEmail()} >JETZT KAUFEN</button> 
                </div>
            </div>

        );
    }
}