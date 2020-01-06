-- Drops the burger_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burger_db" database --
CREATE DATABASE burgers_db;
-- Makes it so all of the following code will affect burger_db --
USE burgers_db;


CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT
burger_name varchar(30),
devoured BOOLEAN NOT NUll default false,
PRIMARY KEY (id)
);