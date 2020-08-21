
DROP TABLE IF EXISTS products;

CREATE TABLE products (

    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    article_number INTEGER,
    picture VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total INTEGER,
    price INTEGER,
    kategorie VARCHAR (250),
    description VARCHAR(500)
);

CREATE TABLE categorie (
    cup VARCHAR
    plate VARCHAR
    bowl VARCHAR
)



INSERT INTO products (name, article_number, picture, total, price, kategorie, description) VALUES ('test1', 101, '/static/products/1.png', 20, 4999, 'Cups', 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO products (name, article_number, picture, total, price, kategorie, description) VALUES ('test2', 102, '/static/products/2.png', 20, 4999, 'Cups', 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO products (name, article_number, picture, total, price, kategorie, description) VALUES ('test3', 103, '/static/products/3.png', 20, 4999, 'Cups', 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO products (name, article_number, picture, total, price, kategorie, description) VALUES ('test4', 104, '/static/products/4.png', 20, 4999, 'Bowls', 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO products (name, article_number, picture, total, price, kategorie, description) VALUES ('test5', 105, '/static/products/5.png', 20, 4999, 'Bowls', 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO products (name, article_number, picture, total, price, kategorie, description) VALUES ('test6', 106, '/static/products/6.JPG', 20, 4999, 'Bowls', 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO products (name, article_number, picture) VALUES ('test2', 102, '/static/products/2.png');

INSERT INTO products (name, article_number, picture) VALUES ('test3', 103, '/static/products/3.png');

INSERT INTO products (name, article_number, picture) VALUES ('test4', 104, '/static/products/4.png');

INSERT INTO products (name, article_number, picture) VALUES ('test5', 105, '/static/products/5.png');

INSERT INTO products (name, article_number, picture) VALUES ('test6', 106, '/static/products/6.JPG');



DROP TABLE IF EXISTS warenkorb;

CREATE TABLE warenkorb (
    id SERIAL PRIMARY KEY, 
    randomUser VARCHAR,
    product_id INTEGER REFERENCES products(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);



CREATE TABLE bestellungen (
    id SERIAL PRIMARY KEY, 
    email
    lastname
    firstname 
    street
    city
    comments
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);



-- warenkorb INTEGER REFERENCES warenkorb(id),