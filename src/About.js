import React from 'react';
import ReactDOM from 'react-dom';


export default function About() {
    return (
        <div id="aboutcontainer" >
            <img src="/static/about.jpg"></img>
            <div className="about">
                <h2>Herzlich Willkommen bei Pling.</h2>
                <p>Hier gibt es eine kleine Auswahl an Produkten aus Porzellan und Steinzeug. Alle angebotenen Produkte werden in Aachen gefertig, von der Idee, über den Formenbau bis hin zum fertigen Produkt. </p>
            </div>
        </div>
    );
}