
const express = require("express");
const router = new express.Router();
const db = require("./db.js");
const ses = require("./ses.js");
const s3 = require ("./s3.js");

const uidSafe = require("uid-safe");

function warenkorbId (req, file, callback) {

    uidSafe(24).then(function(uid) {
        callback(10, uid);
    });
}

console.log("warenkorbId", warenkorbId);

//alle Produkte

router.get("/api/v1/products", (request, response) => {

    db.loadProducts().then((products => {
        response.json({
            success: true,
            products,
        });

    })
    
    ).catch((error) => {
        console.log("error", error);
        response.status(500).json({
            success: false,
            error: error,
        });

    });

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


// warenkorb in db speichern

//speichern

router.post('/api/v1/warenkorb/:id', (request, response) => {

    const produktId = request.params.id;
    randomUser = 

    db.fakeNutzerUndWarenkorbInDB(produktId, randomUser)
        .then(() => {
            response.send({ success: true });
        })
        .catch((error) => {
            console.log(error);
            response.send({ success: false });
        });

});

// laden

router.get('/api/v1/warenkorb', (request, response) => {

    randomUser = 

    db.loadWarenkorb(randomUser).then((products => {
        response.json({
            success: true,
            products,
        });

    })
    
    ).catch((error) => {
        console.log("error", error);
        response.status(500).json({
            success: false,
            error: error,
        });

    });


});


// email mit daten und warenkorb versenden
router.post("/api/v1/buy", (request, response) => {

    const email = request.body.email;

    // db.fakeNutzerUndWarenkorbInDB(email).then((result) => {

    // Send email to slack
    const emailBody = `Thank you for buying in our shop ${request.body.firstname}! .... `;

    ses.send(email, "bestellung", emailBody).then(() => {
            
    //Send success message
        response.json({ success: true });
    });
    // });
});


module.exports = router;


