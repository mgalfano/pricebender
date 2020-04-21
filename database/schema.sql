REVOKE CONNECT ON DATABASE pricebender FROM public;

SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'pricebender';

DROP DATABASE IF EXISTS pricebender;

CREATE DATABASE pricebender;

\c pricebender msx;

CREATE TABLE vendors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL
);

CREATE TABLE parts (
  local_id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  mfg_number VARCHAR(20),
  vendor_number VARCHAR(20) NOT NULL,
  vendor_id INT REFERENCES vendors(id),
  category_id INT REFERENCES categories(id),
  price DECIMAL,
  url VARCHAR(200)
);

