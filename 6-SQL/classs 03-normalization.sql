DROP TABLE IF EXISTS phones;
DROP TABLE IF EXISTS sales;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS clients;

CREATE TABLE IF NOT EXISTS clients (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    name          TEXT    NOT NULL,
    cpf           TEXT    NOT NULL UNIQUE,
    street        TEXT,
    neighbourhood TEXT,
    city          TEXT
);

CREATE TABLE IF NOT EXISTS phones (
    number     TEXT    NOT NULL,
    id_client  INTEGER NOT NULL,
    PRIMARY KEY (number, id_client),
    FOREIGN KEY (id_client) REFERENCES clients(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS products (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name        TEXT    NOT NULL,
    price       TEXT    NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS sales (
    id         INTEGER   PRIMARY KEY AUTOINCREMENT,
    id_client  INTEGER   NOT NULL,
    id_product INTEGER   NOT NULL,
    amount     INTEGER   NOT NULL,
    date       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_client) REFERENCES clients(id) ON DELETE CASCADE,
    FOREIGN KEY (id_product) REFERENCES products(id) ON DELETE CASCADE
);

INSERT INTO clients(name, cpf) VALUES
   ("Odilon", "123.123.123-00"),
   ("Pedro", "123.123.123-01"),
   ("Éric", "123.123.123-02");

INSERT INTO phones(number, id_client) VALUES
     ("(88) 92345-6789", 1),
     ("(88) 93567-9786", 2),
     ("(88) 93566-5432", 2),
     ("(88) 91523-7534", 3);

INSERT INTO products(name, price) VALUES
    ("Fone Lenovo XT88", 119.99),
    ("Smart Watch", 109.99),
    ("Teclado K68", 209.99);

INSERT INTO sales(id_client, id_product, amount) VALUES
     (1 , 1 , 3),
     (1 , 2 , 5),
     (3 , 3 , 3),
     (2 , 1 , 4);

SELECT clients.name, phones.number
FROM clients
INNER JOIN phones ON clients.id = phones.id_client
ORDER BY clients.name;

SELECT * FROM products;
SELECT * FROM sales;

SELECT clients.name,
       products.name AS produto,
       products.price,
       sales.amount AS pedidos,
       sales.amount * products.price AS total
       
FROM clients
INNER JOIN sales ON sales.id_client = clients.id
INNER JOIN products ON sales.id_product = products.id
ORDER BY clients.name;

SELECT * FROM clients;
DELETE FROM clients WHERE id = 1;