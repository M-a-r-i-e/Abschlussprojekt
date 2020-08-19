
DROP TABLE IF EXISTS products;

CREATE TABLE products (

    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    article_number INTEGER,
    picture VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categorie (
    cup VARCHAR
    plate VARCHAR
    bowl VARCHAR
)



INSERT INTO products (name, article_number, picture) VALUES ('test1', 101, '/static/products/1.png');

INSERT INTO products (name, article_number, picture) VALUES ('test2', 102, '/static/products/2.png');

INSERT INTO products (name, article_number, picture) VALUES ('test3', 103, '/static/products/3.png');

INSERT INTO products (name, article_number, picture) VALUES ('test4', 104, '/static/products/4.png');

INSERT INTO products (name, article_number, picture) VALUES ('test5', 105, '/static/products/5.png');

INSERT INTO products (name, article_number, picture) VALUES ('test6', 106, '/static/products/6.JPG');

