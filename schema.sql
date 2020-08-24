
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



INSERT INTO products (name, article_number, picture, total, price, kategorie, description) VALUES ('Streifentasse', 101, '/static/products/1.png', 20, 1999, 'Cups', 'Mittelgroße Tasse aus Steinzeug.
beige | braun | weiß gestreift.
Material und Form schmiegen sich wunderbar in die Hand. 
Ideal für eine gemütliche Tasse Tee, oder Kaffee am Morgen.');
INSERT INTO products (name, article_number, picture, total, price, kategorie, description) VALUES ('Teller', 102, '/static/products/2.png', 20, 2599, 'Plates', 'Schlichter weißer Teller aus Porzellan. 
Ein praktischer und zeitloser Begleiter für fast jede Situation.
Perfekt für ein Stück Kuchen am Sonntag, oder das tägliche Frühstück zum Start in den Tag. 
Selbstverständlich kann er auch in der Spülmaschine gereinigt werden.');
INSERT INTO products (name, article_number, picture, total, price, kategorie, description) VALUES ('Riffelbecher', 103, '/static/products/3.png', 20, 2499, 'Cups', 'Geriffelter Becher aus Porzellan in einem hellen Beige.
Die geriffelte Struktur lässt ihn besonders gut in der Hand liegen.
Macht sowohl im Badezimmer als Zahnbüstenhalter, als auch als Trinkbecher eine gute Figur.
');
INSERT INTO products (name, article_number, picture, total, price, kategorie, description) VALUES ('Vase mit Loch', 104, '/static/products/4.png', 20, 7999, 'Vases', 'Besonders große Vase aus Steinzeug.
Die ausgefallene, bauchige Form mit großem Loch in der Mitte ist ein echter Blickfang.
');
INSERT INTO products (name, article_number, picture, total, price, kategorie, description) VALUES ('Elegante Vase', 105, '/static/products/5.png', 20, 6999, 'Vases', 'Mittelgroße Vase aus Porzellan. 
Ideal als Bodenvase für größere Pflanzen.
Besticht durch ihre weiche, fließende, leicht zusammenlaufende Form.');
INSERT INTO products (name, article_number, picture, total, price, kategorie, description) VALUES ('Teller Schwarz | weiß', 106, '/static/products/6.png', 20, 1999, 'Plates', 'Weißer Teller aus Porzellan. Der dunkle Rand bildet einen wunderschönen Kontrast zu dem restlichen weiß des Tellers.
Ideal als Kuchen oder Dessertteller.
Ist sehr unempfindlich und kann ich der Spülmaschine gereinigt werden.');
INSERT INTO products (name, article_number, picture, total, price, kategorie, description) VALUES ('Gefleckte Tasse', 107, '/static/products/7.png', 20, 1799, 'Cups', 'Mittelgroße Tasse mit Henkel.
Weiß mit beigen Farbflecken
Material und Form schmiegen sich wunderbar in die Hand. 
Ideal für eine gemütliche Tasse Tee, oder Kaffee am Morgen.');
INSERT INTO products (name, article_number, picture, total, price, kategorie, description) VALUES ('Zarte Schüsseln', 108, '/static/products/8.png', 20, 2999, 'Bowls', 'Besonders dünne, weiße, leicht transparente Schüsseln aus Porzellan.
Der unregelmäßig geformte Rand macht jede Schüssel zu einem Unikat. 
Lassen sich wunderbar stapeln.
Egal ob Müsli, Dessert oder Suppe, die Schüsseln sind für jede Gelegenheit perfekt geeignet.');
INSERT INTO products (name, article_number, picture, total, price, kategorie, description) VALUES ('2er-Set Vasen', 109, '/static/products/9.png', 20, 8999, 'Vases', 'Zwei bauchige Vasen mit dünnem Hals.
Glänzende grüne und weiße Glasur.
Ideal für um schöne Blumen zu präsentieren.');


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