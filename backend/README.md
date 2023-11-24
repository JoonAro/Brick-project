## Load data local infile command and setup
SHOW GLOBAL VARIABLES LIKE 'local_infile';

# if 'OFF' set value to 'ON'
SET GLOBAL local_infile = 'ON';

# check again. should be on
SHOW GLOBAL VARIABLES LIKE 'local_infile';

# create products table
CREATE TABLE IF NOT EXISTS products ( id INT AUTO_INCREMENT, product_name VARCHAR(255) NOT NULL, description TEXT, product_price INT NOT NULL, amount INT NOT NULL, instock BOOL NOT NULL, weight INT NOT NULL, category VARCHAR(255) NOT NULL, PRIMARY KEY (id) );

# load data to products ATTENTION! copy your own local path to the products.txt /Users/.../products.txt
LOAD DATA LOCAL INFILE './products.txt' INTO TABLE products FIELDS TERMINATED BY ',';