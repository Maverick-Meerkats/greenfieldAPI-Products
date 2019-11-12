module.exports = `DROP TABLE IF EXISTS productInfo;
     DROP TABLE IF EXISTS features;
     DROP TABLE IF EXISTS related;
     DROP TABLE IF EXISTS skus;
     DROP TABLE IF EXISTS styles;

   CREATE TABLE productInfo(
             id INT PRIMARY KEY,
             name VARCHAR(100),
             slogan character varying,
             description TEXT,
             category VARCHAR(255),
             default_price VARCHAR(50)
             );
    CREATE TABLE features (
             id INT PRIMARY KEY,
             product_id INT,
             feature VARCHAR(55),
             value VARCHAR(55)
             );
     CREATE TABLE related (
             id INT PRIMARY KEY,
             current_product_id INT,
             related_product_id INT
             );
     CREATE TABLE skus (
             id INT PRIMARY KEY,
             styleId INT,
             size VARCHAR(20),
             quantity INT
              );
     CREATE TABLE styles (
         id INT PRIMARY KEY,
         productId INT,
         name VARCHAR(60),
         sale_price VARCHAR(5),
         original_price INT,
         default_style SMALLINT
     );

          COPY productInfo(id,name,slogan,description,category, default_price)
           FROM 'C:\\DatabaseData\\product.csv' DELIMITER ',' CSV HEADER;
           COPY features(id,product_id,feature,value)
           FROM 'C:\\DatabaseData\\features.csv' DELIMITER ',' CSV HEADER;
           COPY related(id,current_product_id,related_product_id)
           FROM 'C:\\DatabaseData\\related.csv' DELIMITER ',' CSV HEADER;

           COPY skus(id, styleId,size, quantity)
           FROM 'C:\\DatabaseData\\skus.csv' DELIMITER ',' CSV HEADER;
           UPDATE productInfo SET default_price=trim(default_price);
           UPDATE productInfo SET default_price=trim(leading 'default_price: ' from default_price);
           COPY styles (id,productId,name,sale_price,original_price,default_style)
           FROM 'C:\\DatabaseData\\styles.csv' DELIMITER ',' CSV HEADER;`;
