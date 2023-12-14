## Load data local infile command and setup
SHOW GLOBAL VARIABLES LIKE 'local_infile';

# if 'OFF' set value to 'ON'
SET GLOBAL local_infile = 'ON';

# check again. should be on
SHOW GLOBAL VARIABLES LIKE 'local_infile';

# create categories table
CREATE TABLE categories( category_id INT AUTO_INCREMENT PRIMARY KEY, category_name VARCHAR(100) NOT NULL);
# load data to categories ATTENTION! copy your own local path to the products.txt /Users/.../categories.txt
LOAD DATA LOCAL INFILE './categories.txt' INTO TABLE categories FIELDS TERMINATED BY ',';
# create products table
CREATE TABLE IF NOT EXISTS products ( id INT AUTO_INCREMENT PRIMARY KEY, product_name VARCHAR(255) NOT NULL, description TEXT, product_price INT NOT NULL, amount INT NOT NULL, instock BOOL NOT NULL, weight INT, category_id INT, CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES categories(category_id));
# load data to products ATTENTION! copy your own local path to the products.txt /Users/.../products.txt
LOAD DATA LOCAL INFILE './products.txt' INTO TABLE products FIELDS TERMINATED BY ',';

TESTING MERGE