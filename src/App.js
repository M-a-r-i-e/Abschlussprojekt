import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Welcomepage from "./Welcomepage.js";
import Overview from "./Overview.js";
import {Link} from "react-router-dom";


// export default function App() {
//     return (

//         <div>Welcome to this wonderful shop!</div>
//     );
// }

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            
        };
    }


    render() {
        return (

            <div id="maincontainer">
            
                <BrowserRouter>
                    <div id="logo">
                        <Link to ="/welcome"><img src="./static/Logo.png"></img></Link>
                    </div>

                    <div>
                        <Link to="/shop">shop</Link>
                        |
                        <Link to="">about</Link>
                        |
                        <Link to="">kontakt</Link>
                    </div>

                
                    <Route path="/welcome" component={Welcomepage}>
                    </Route>

                    <Route path="/shop" component={Overview}>
                    </Route>
                
                </BrowserRouter>

            </div>

        );

    }
}