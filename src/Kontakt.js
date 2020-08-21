import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import {Link, Redirect} from "react-router-dom";


export default class Kontakt extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            lastname: "",
            firstname: "",
            message: "",         
        };
    }

    //ajax call that sends the mailadress
    sendMessage() {
        axios.post('/api/v1/kontaktmessage', {
            email: this.state.email,
            lastname: this.state.lastname,
            firstname: this.state.firstname,
            message: this.state.message,
        }).then(response => {
            // console.log("Response", response);
            // this.props.history.push("/thankyou");
        });
    }



    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }


    render() {

        return(
            
            <div id="kontakt" >
                <div>
                    <input type="text" name="email" placeholder="YOUR EMAIL" onChange={(event) => this.handleChange(event)}></input>
                    <input type="text" name="lastname" placeholder="LASTNAME" onChange={(event) => this.handleChange(event)}></input>
                    <input type="text" name="firstname" placeholder="FIRSTNAME" onChange={(event) => this.handleChange(event)}></input>
                    <input type="text" name="message" placeholder="YOUR MESSAGE" onChange={(event) => this.handleChange(event)}></input>
                    <button onClick={(e) => this.sendMessage()} >SEND</button> 
                </div>
            </div>

        );
    }
}