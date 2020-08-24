
const spicedPg = require("spiced-pg");

const db = spicedPg(process.env.DATABASE_URL || "postgres:Marie1:@localhost:5432/abschlussprojekt");



exports.loadProducts = () => {

    return db.query(`SELECT * FROM products`).then((response) => response.rows);

};

exports.loadCups = () => {
    return db.query(`SELECT * FROM products WHERE kategorie='Cups';`).then((response) => response.rows);
};

exports.loadBowls = () => {
    return db.query(`SELECT * FROM products WHERE kategorie='Bowls';`).then((response) => response.rows);
};

exports.getProduct = (id) => {
    return db
        .query("SELECT * FROM products WHERE id=$1;", [id])
        .then(({ rows }) => rows[0]);
};

// artikel die im warenkorb liegen mit fake id abpeichern damit sie nicht beim laden der seite verschwinden
exports.fakeNutzerUndWarenkorbInDB = (produktId, randomUser) => {
    return db.query("INSERT INTO warenkorb;", [produktId, randomUser]);
};

//artikel aus dem warenkorb laden
exports.loadWarenkorb = (randomUser) => {
    return db.query("SELECT * FROM warenkorb where randomUser=$1;" [randomUser]);
};


// artikel aus bestellung in db speichern
exports.fakeNutzerUndWarenkorbInDB = (produktId, email) => {
    return db.query("INSERT INTO bestellungen;", [produktId, email]);
};
