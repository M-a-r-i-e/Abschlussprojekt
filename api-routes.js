
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

router.get("/api/v1/products/cups", (request, response) => {

    db.loadCups().then((products => {
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

router.get("/api/v1/products/bowls", (request, response) => {

    db.loadBowls().then((products => {
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

router.get("/api/v1/products/plates", (request, response) => {

    db.loadPlates().then((products => {
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

router.get("/api/v1/products/vases", (request, response) => {

    db.loadVases().then((products => {
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


// warenkorb in lokalstorage speichern

// router.post('/api/v1/warenkorb/:id', (request, response) => {

//     const produktId = request.params.id;
//     produktId.on(function() {
//         localStorage.setItem(JSON.stringify(produktId));
//     });
//     produktId.val(localStorage.getItem());

// });

//speichern

// router.post('/api/v1/warenkorb/:id', (request, response) => {

//     const produktId = request.params.id;
//     randomUser = 

//     db.fakeNutzerUndWarenkorbInDB(produktId, randomUser)
//         .then(() => {
//             response.send({ success: true });
//         })
//         .catch((error) => {
//             console.log(error);
//             response.send({ success: false });
//         });

// });

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
    console.log("requestbodyproducts", request.body.products);
    const email = request.body.email;

    const products = request.body.products;

    // db.fakeNutzerUndWarenkorbInDB(email).then((result) => {
    // Send email to slack
    const emailBody = `Vielen Dank für deinen Einkauf ${request.body.firstname} ${request.body.lastname}! 
    Deine Adresse: ${request.body.street} ${request.body.number} ${request.body.city} ${request.body.plz}
    Deine Bestellung: ${products.map((product) => (product.name ) + (product.id ) + (product.price/100 ))} €`; //gesamtes objekt anzeigen?

    ses.send(email, "bestellung", emailBody).then(() => {
            
    //Send success message
        response.json({ success: true });
    });

    // });
});


//kontaktformular
router.post("/api/v1/kontaktmessage", (request, response) => {

    const email = request.body.email;

    // Send email to slack
    const emailBody = `Thank you for this message ${request.body.firstname} ${request.body.lastname}. Your Message: ${request.body.message} We will contact you as soon as possible.`;

    ses.send(email, "nachricht", emailBody).then(() => {
            
    //Send success message
        response.json({ success: true });
    });
    // });
});


module.exports = router;
