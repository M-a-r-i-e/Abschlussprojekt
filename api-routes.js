
const express = require("express");
const router = new express.Router();
const db = require("./db.js");

//alle Produkte

router.get("/api/v1/products", (request, response) => {

    db.loadProducts().then((products => {
        console.log("products", products);
        response.json({
            success: true,
            products,
        });
        ///FEHLER BEHEBEN!!!
            // .catch((error) => {
            //     console.log("error", error);
            //     response.status(500).json({
            //         success: false,
            //         error: error,
            //     });

            // });
    })
    
    );

});


// produkte nach kategorien laden



// produkte detailansicht

router.get('/api/v1/details/:id', (request, response) => {

    const id = request.params.id;
    console.log("id", id);

    db.getProduct(id).then(product => {            
        if(!product) {
            response.json({});
        } else {
            response.json(product);
            console.log("product", product);
        }
    })
        .catch((error) => {
            console.log("error", error);
            response.status(500).json(error);
        });

});


module.exports = router;