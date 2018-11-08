DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
use bamazon_db;

CREATE TABLE Products (
  id INTEGER AUTO_INCREMENT NOT NULL,
  description VARCHAR(30) NOT NULL,
  price DECIMAL(10,2),
  name VARCHAR(30),
  PRIMARY KEY(id)
);