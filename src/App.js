import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Welcomepage from "./Welcomepage.js";
import Overview from "./Overview.js";
import {Link} from "react-router-dom";
import Details from "./Details";
import Warenkorb from "./Warenkorb";
import Buy from "./Buy";
import Thankyou from "./Thankyou";
import Kontakt from "./Kontakt";
import Cups from "./Cups.js";
import Bowls from "./Bowls.js";

// export default function App() {
//     return (

//         <div>Welcome to this wonderful shop!</div>
//     );
// }

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            productsInWarenkorb: [],
            user: []
        };
    }


    render() {

        const { productsInWarenkorb } = this.state;
        console.log("productstate", productsInWarenkorb);

        const {user} = this.state;
        console.log("user", user);

        return (
            
            <div id="maincontainer">
            
                <BrowserRouter>
                    <div id="header">
                        <div id="logo">
                            <Link to ="/"><img src="./static/Logo.png"></img></Link>
                        </div>
                        <div id="warenkorb">
                            <Link to ="/warenkorb"><img src="./static/warenkorb.png"></img> <div id="anzahl">{productsInWarenkorb.length}</div></Link>
                        </div>
                    
                        <div id="menu">
                            <div className="untermenushop">
                                <div><Link className="untermenu" to="/shop">shop</Link>
                                    <div className="dropdown">
                                        <ul>
                                            <li><Link className="linkmenu" to="/shop">All Products</Link></li>
                                            <li><Link className="linkmenu" to="/shop/cups">Cups</Link></li>
                                            <li><Link className="linkmenu" to="/shop/bowls">Bowls</Link></li>
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
                                <Link className="untermenu" to="/kontakt">kontakt</Link>
                            </div>
                        </div>
                    </div>

                
                    <Route exact path="/" component={Welcomepage}>
                    </Route>

                    <Route exact path="/shop" component={Overview}>
                    </Route>

                    <Route path="/shop/cups" component={Cups}>
                    </Route>

                    <Route path="/shop/bowls" component={Bowls}>
                    </Route>

                    <Route 
                        path="/product/:id" 
                        render={props => (
                            <Details
                                key={props.match.url}
                                match={props.match}
                                history={props.history}

                                addToCard={(newProduct) => {
                                    this.setState({
                                        productsInWarenkorb: [
                                            ...this.state.productsInWarenkorb,
                                            newProduct
                                        ]
                                    });
                                }}
                            />
                        )}    
                    />

                    <Route 
                        path="/warenkorb" 
                        render={() => (
                            <Warenkorb
                                productsInWarenkorb = {productsInWarenkorb}
                            />
                        )}    
                    />

                    <Route 
                        path="/buy" 
                        render={(props) => (
                            <Buy
                                history={props.history}
                                productsInWarenkorb = {productsInWarenkorb}

                                userData={(newUser) => {
                                    this.setState({
                                        user: [
                                            ...this.state.user,
                                            newUser
                                        ]
                                    });
                                }}
                            />
                        )}    
                    />

                    <Route
                        path="/thankyou" component={Thankyou}
                        // user = {user}
                    ></Route>

                    <Route
                        path="/kontakt" component={Kontakt}
                    ></Route>

                    <div id="footer">
                        <div>copyright by me.</div>
                    </div>
                
                </BrowserRouter>



            </div>

        );

    }
}