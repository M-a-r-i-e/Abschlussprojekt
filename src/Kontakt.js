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
            this.setState({
                email: "",
                lastname:"",
                firstname: "",
                message: "",
            });
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }


    render() {

        return(
            
            <div id="kontaktcontainer" >
                <div>WÜNSCHE, ANREGUNG, KRITIK?</div>
                <div className="kontakt">
                    <input type="text" value={this.state.email} name="email" placeholder="YOUR EMAIL" onChange={(event) => this.handleChange(event)}></input>
                    <input type="text" value={this.state.lastname} name="lastname" placeholder="LASTNAME" onChange={(event) => this.handleChange(event)}></input>
                    <input type="text" value={this.state.firstname} name="firstname" placeholder="FIRSTNAME" onChange={(event) => this.handleChange(event)}></input>
                    <input className="message" type="text" value={this.state.message} name="message" placeholder="YOUR MESSAGE" onChange={(event) => this.handleChange(event)}></input>
                    <button onClick={(e) => this.sendMessage()} >SEND</button> 
                </div>
            </div>

        );
    }
}