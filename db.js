
const spicedPg = require("spiced-pg");

const db = spicedPg(process.env.DATABASE_URL || "postgres:Marie1:@localhost:5432/abschlussprojekt");



exports.loadProducts = () => {

    return db.query(`SELECT * FROM products`).then((response) => response.rows);

};