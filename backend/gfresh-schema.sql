CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  image TEXT,
  description TEXT NOT NULL,
  price NUMERIC CHECK (price >= 0),
  quantity INTEGER CHECK (quantity >= 0)
);

CREATE TABLE likes (
  username VARCHAR(25)
    REFERENCES users ON DELETE CASCADE,
  product_id INTEGER
    REFERENCES products ON DELETE CASCADE,
  PRIMARY KEY (username, product_id)
);