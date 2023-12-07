DROP TABLE IF EXISTS order_line;
DROP TABLE IF EXISTS customer_order;
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS product_category;

CREATE TABLE product_category(
    category_name VARCHAR(255) NOT NULL PRIMARY KEY,
    category_description VARCHAR(500)
);

CREATE TABLE product(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2),
    image_url VARCHAR(255),
    category VARCHAR(255),
    FOREIGN KEY (category) REFERENCES product_category(category_name)
);

CREATE TABLE customer(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    username VARCHAR(255) UNIQUE,
    pw VARCHAR(255)
);

CREATE TABLE customer_order(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    order_date DATETIME NOT NULL,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id)
);

CREATE TABLE order_line(
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES customer_order(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);


-- Lisää uudet kategoriat
INSERT INTO product_category (category_name, category_description) VALUES
('boots', 'Various types of boots'),
('heels', 'High-heeled shoes'),
('sneakers', 'Comfortable sneakers'),
('allCategories', 'All available categories');

-- Lisää tuotteet kategorioihin
INSERT INTO product (product_name, price, image_url, category) VALUES
('glitter heels', 50, 'img/heels/heels1.jpg', 'heels'),
('leather heels', 45, 'img/heels/heels2.jpg', 'heels'),
('white heels', 35, 'img/heels/heels3.jpg', 'heels'),
('high black heels', 39, 'img/heels/heels4.jpg', 'heels'),
('colorful sneakers', 50, 'img/sneakers/sneakers1.jpg', 'sneakers'),
('running sneakers', 90, 'img/sneakers/sneakers2.jpg', 'sneakers'),
('blue sneakers', 60, 'img/sneakers/sneakers3.jpg', 'sneakers'),
('white and red sneakers', 120, 'img/sneakers/sneakers4.jpg', 'sneakers'),
('retro boots', 80, 'img/Boots/boots1.jpg', 'boots'),
('blue boots', 30, 'img/Boots/boots2.jpg', 'boots'),
('black boots', 130, 'img/Boots/boots3.jpg', 'boots'),
('brown boots', 90, 'img/Boots/boots4.jpg', 'boots');

-- Lisää kaikki tuotteet "allCategories" -kategoriaan
INSERT INTO product (product_name, price, image_url, category) VALUES
('glitter heels', 50, 'img/heels/heels1.jpg', 'allCategories'),
('leather heels', 45, 'img/heels/heels2.jpg', 'allCategories'),
('white heels', 35, 'img/heels/heels3.jpg', 'allCategories'),
('high black heels', 39, 'img/heels/heels4.jpg', 'allCategories'),
('colorful sneakers', 50, 'img/sneakers/sneakers1.jpg', 'allCategories'),
('running sneakers', 90, 'img/sneakers/sneakers2.jpg', 'allCategories'),
('blue sneakers', 60, 'img/sneakers/sneakers3.jpg', 'allCategories'),
('white and red sneakers', 120, 'img/sneakers/sneakers4.jpg', 'allCategories'),
('retro boots', 80, 'img/Boots/boots1.jpg', 'allCategories'),
('blue boots', 30, 'img/Boots/boots2.jpg', 'allCategories'),
('black boots', 130, 'img/Boots/boots3.jpg', 'allCategories'),
('brown boots', 90, 'img/Boots/boots4.jpg', 'allCategories');

