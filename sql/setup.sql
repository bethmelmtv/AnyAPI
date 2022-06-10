-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists cities;


CREATE table cities (
  id BIGINT GENERATED ALWAYS as IDENTITY,
  city_name VARCHAR NOT NULL,
  country VARCHAR NOT NULL,
  expensive BOOLEAN
);


INSERT INTO cities (city_name, country, expensive) VALUES
('Atlanta', 'USA', true),
('New Mexico', 'USA', false),
('Los Angeles', 'USA', true);
