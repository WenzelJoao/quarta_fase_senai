CREATE DATABASE desi20251;

use desi20251;

CREATE TABLE users (
    id varchar(150) NOT NULL,
    name varchar(150) NOT NULL,
    email varchar(150) NOT NULL,
    password_hash varchar(255) NOT NULL,
    role ENUM("admin", "user") NOT NULL DEFAULT "user"
);

create table materials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL, 
    category VARCHAR(150) NOT NULL
);