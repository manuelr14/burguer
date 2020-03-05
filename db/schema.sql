DROP DATABASE IF EXISTS burguers_db;

CREATE DATABASE burguers_db;

USE burguers_db;

 CREATE TABLE burguers (
 id INT AUTO_INCREMENT NOT NULL,
 burguer_name VARCHAR (30),
 devoured BOOLEAN,
 PRIMARY KEY (id)
  
 );