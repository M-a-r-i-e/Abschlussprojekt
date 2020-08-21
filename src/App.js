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
                            <Link to ="/warenkorb"><img src="./static/warenkorb.png"></img> <div id="anzahl"></div></Link>
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
                                <Link className="untermenu" to="/kontakt">kontakt</Link>
                            </div>
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
                            />
                        )}    
                    />

                    <Route
                        path="/thankyou" component={Thankyou}
                    ></Route>

                    <Route
                        path="/kontakt" component={Kontakt}
                    ></Route>

                    <div id="footer">
                        <div>copyright...</div>
                    </div>
                
                </BrowserRouter>



            </div>

        );

    }
}