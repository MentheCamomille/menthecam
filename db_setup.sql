CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    category VARCHAR(50),
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Orders (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE Order_Items (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Products(id) ON DELETE CASCADE
);

CREATE TABLE Favorites (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Products(id) ON DELETE CASCADE
);

CREATE TABLE Blog_Posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Notifications (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    type VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

INSERT INTO Users (username, email, password) VALUES
('Alice', 'alice@example.com', 'password123'),
('Bob', 'bob@example.com', 'securepass'),
('Charlie', 'charlie@example.com', 'mypassword');

-- Insert sample data into Products table
INSERT INTO Products (name, description, price, stock, category, image_url) VALUES
('Eco Teddy Bear', 'A cute teddy bear made from recycled materials.', 25.99, 50, 'Toys', 'https://example.com/images/teddy.jpg'),
('Recycled Notebook', 'A notebook made with 100% recycled paper.', 7.99, 100, 'Stationery', 'https://example.com/images/notebook.jpg'),
('Reusable Water Bottle', 'A stainless steel bottle to reduce plastic waste.', 15.49, 75, 'Accessories', 'https://example.com/images/bottle.jpg');

-- Insert sample data into Blog_Posts table
INSERT INTO Blog_Posts (title, content, author) VALUES
('Why Choose Sustainable Products?', 'Sustainability is key to a healthier planet...', 'Alice'),
('How to Reduce Waste at Home', 'Simple tips to minimize waste in your daily life...', 'Bob');

-- Insert sample data into Orders table
INSERT INTO Orders (user_id, total_price, status) VALUES
(1, 41.48, 'completed'),
(2, 25.99, 'pending');

-- Insert sample data into Order_Items table
INSERT INTO Order_Items (order_id, product_id, quantity, price) VALUES
(1, 2, 2, 15.49),
(2, 1, 1, 25.99);

-- Insert sample data into Favorites table
INSERT INTO Favorites (user_id, product_id) VALUES
(1, 3),
(2, 1),
(3, 2);

-- Insert sample data into Notifications table
INSERT INTO Notifications (user_id, type, content) VALUES
(1, 'order_confirmation', 'Your order has been confirmed!'),
(2, 'promotion', 'Check out our latest eco-friendly products!');