import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Welcomepage from "./Welcomepage.js";
import Overview from "./Overview.js";
import {Link} from "react-router-dom";
import Details from "./Details";


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
                        <Link to ="/"><img src="./static/Logo.png"></img></Link>
                    </div>
                    <div id="warenkorb">
                        <Link to ="/"><img src="./static/warenkorb.png"></img></Link>
                    </div>

                    <div id="menu">
                        <div className="untermenushop">
                            <div><Link className="untermenu" to="/shop">shop</Link>
                                <div className="dropdown">
                                    <ul>
                                        <li><Link className="linkmenu" to="/shop">All Products</Link></li>
                                        <li><Link className="linkmenu" to="/shop">Cups</Link></li>
                                        <li><Link className="linkmenu" to="/shop">Bowls</Link></li>
                                        <li><Link className="linkmenu" to="/shop">Plates</Link></li>
                                        <li><Link className="linkmenu" to="/shop">Vasen</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="untermenushop">
                            <Link className="untermenu" to="">about</Link>
                        </div>
                        <div className="untermenushop">
                            <Link className="untermenu" to="">kontakt</Link>
                        </div>
                    </div>

                
                    <Route exact path="/" component={Welcomepage}>
                    </Route>

                    <Route path="/shop" component={Overview}>
                    </Route>

                    <Route 
                        path="/product/:id" 
                        render={props => (
                            <Details
                                key={props.match.url}
                                match={props.match}
                                history={props.history}
                            />
                        )}    
                    
                    />

                
                </BrowserRouter>

            </div>

        );

    }
}