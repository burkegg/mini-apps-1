DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE accounts(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  pass VARCHAR(100) NOT NULL,
  add1 VARCHAR(100) NOT NULL,
  add2 VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  zip int NOT NULL,
  phone VARCHAR(100) NOT NULL,
  card VARCHAR(100) NOT NULL,
  exp VARCHAR(100) NOT NULL,
  cvv int NOT NULL,
  zip2 int NOT NULL
);

-- [id, name, email, pass, add1, add2, city, state, zip, phone, card, exp, cvv, zip]
-- insert into accounts (name, email, pass, add1, add2, city, state, zip, phone, card, exp, cvv, zip2) VALUES ('BOB', 'bob@email', 'secret', '1600 Penn Ave', 'basement', 'Winchester', 'VA', 24601, '5101231234', '4444444444444444', '12/01/21', 123, 24602)