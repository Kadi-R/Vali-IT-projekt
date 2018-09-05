DROP TABLE IF EXISTS users;

CREATE TABLE users(
id BIGSERIAL PRIMARY KEY,
firstname VARCHAR(128) NOT NULL,
surname VARCHAR(128) NOT NULL,
password VARCHAR(128) NOT NULL,
email VARCHAR(128) NOT NULL
);

DROP TABLE IF EXISTS appointments;

CREATE TABLE appointments(
id BIGSERIAL PRIMARY KEY,
user_id BIGINT REFERENCES user(id),
event_name VARCHAR NOT NULL,
time TIMESTAMP,
description TEXT
);