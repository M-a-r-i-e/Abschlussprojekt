
const express = require("express");
const router = new express.Router();
const db = require("./db.js");

router.get("/api/v1/products", (request, response) => {

    db.loadProducts().then((products => {
        console.log("products", products);
        response.json({
            success: true,
            products,
        })
        ///FEHLER BEHEBEN!!!
            .catch((error) => {
                console.log("error", error);
                response.status(500).json({
                    success: false,
                    error: error,
                });

            });
    })
    
    );

});

module.exports = router;