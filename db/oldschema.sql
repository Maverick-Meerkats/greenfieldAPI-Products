-- -- ---
-- -- Globals
-- -- ---

-- -- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- -- SET FOREIGN_KEY_CHECKS=0;

-- -- ---
-- -- Table 'productinformation'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `productinformation`;
		
-- CREATE TABLE `productinformation` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `name` VARCHAR(60) NOT NULL DEFAULT '""',
--   `slogan` VARCHAR NULL DEFAULT '""',
--   `description` VARCHAR(1000) NULL DEFAULT '""',
--   `default_price` INTEGER NULL DEFAULT NULL,
--   `id_categories` INTEGER NULL DEFAULT NULL,
--   `id_relatedProducts` INTEGER NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'categories'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `categories`;
		
-- CREATE TABLE `categories` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `name` VARCHAR(60) NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'features'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `features`;
		
-- CREATE TABLE `features` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `name` VARCHAR(60) NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'feature values'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `feature values`;
		
-- CREATE TABLE `feature values` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `featurename` INTEGER NULL DEFAULT NULL,
--   `id_features` INTEGER NULL DEFAULT NULL,
--   `id_productinformation` INTEGER NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'product styles'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `product styles`;
		
-- CREATE TABLE `product styles` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `name` VARCHAR NULL DEFAULT NULL,
--   `original_price` INTEGER NULL DEFAULT 0,
--   `sale_price` INTEGER NULL DEFAULT 0,
--   `id_productinformation` INTEGER NULL DEFAULT NULL,
--   `id_skus` INTEGER NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'skus'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `skus`;
		
-- CREATE TABLE `skus` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `xs` INTEGER NULL DEFAULT 0,
--   `s` INTEGER NULL DEFAULT 0,
--   `m` INTEGER NULL DEFAULT 0,
--   `l` INTEGER NULL DEFAULT 0,
--   `xl` INTEGER NULL DEFAULT 0,
--   `xxl` INTEGER NULL DEFAULT 0,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'photos'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `photos`;
		
-- CREATE TABLE `photos` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `url` VARCHAR(100000000000) NULL DEFAULT '""',
--   `id_productinformation` INTEGER NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'relatedProducts'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `relatedProducts`;
		
-- CREATE TABLE `relatedProducts` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `id_productinformation` INTEGER NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'actualRelatedProduct'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `actualRelatedProduct`;
		
-- CREATE TABLE `actualRelatedProduct` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `id_relatedProducts` INTEGER NULL DEFAULT NULL,
--   `id_productinformation` INTEGER NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Foreign Keys 
-- -- ---

-- ALTER TABLE `productinformation` ADD FOREIGN KEY (id_categories) REFERENCES `categories` (`id`);
-- ALTER TABLE `productinformation` ADD FOREIGN KEY (id_relatedProducts) REFERENCES `relatedProducts` (`id`);
-- ALTER TABLE `feature values` ADD FOREIGN KEY (id_features) REFERENCES `features` (`id`);
-- ALTER TABLE `feature values` ADD FOREIGN KEY (id_productinformation) REFERENCES `productinformation` (`id`);
-- ALTER TABLE `product styles` ADD FOREIGN KEY (id_productinformation) REFERENCES `productinformation` (`id`);
-- ALTER TABLE `product styles` ADD FOREIGN KEY (id_skus) REFERENCES `skus` (`id`);
-- ALTER TABLE `photos` ADD FOREIGN KEY (id_productinformation) REFERENCES `productinformation` (`id`);
-- ALTER TABLE `relatedProducts` ADD FOREIGN KEY (id_productinformation) REFERENCES `productinformation` (`id`);
-- ALTER TABLE `actualRelatedProduct` ADD FOREIGN KEY (id_relatedProducts) REFERENCES `relatedProducts` (`id`);
-- ALTER TABLE `actualRelatedProduct` ADD FOREIGN KEY (id_productinformation) REFERENCES `productinformation` (`id`);

-- -- ---
-- -- Table Properties
-- -- ---

-- -- ALTER TABLE `productinformation` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- -- ALTER TABLE `categories` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- -- ALTER TABLE `features` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- -- ALTER TABLE `feature values` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- -- ALTER TABLE `product styles` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- -- ALTER TABLE `skus` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- -- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- -- ALTER TABLE `relatedProducts` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- -- ALTER TABLE `actualRelatedProduct` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- -- ---
-- -- Test Data
-- -- ---

-- -- INSERT INTO `productinformation` (`id`,`name`,`slogan`,`description`,`default_price`,`id_categories`,`id_relatedProducts`) VALUES
-- -- ('','','','','','','');
-- -- INSERT INTO `categories` (`id`,`name`) VALUES
-- -- ('','');
-- -- INSERT INTO `features` (`id`,`name`) VALUES
-- -- ('','');
-- -- INSERT INTO `feature values` (`id`,`featurename`,`id_features`,`id_productinformation`) VALUES
-- -- ('','','','');
-- -- INSERT INTO `product styles` (`id`,`name`,`original_price`,`sale_price`,`id_productinformation`,`id_skus`) VALUES
-- -- ('','','','','','');
-- -- INSERT INTO `skus` (`id`,`xs`,`s`,`m`,`l`,`xl`,`xxl`) VALUES
-- -- ('','','','','','','');
-- -- INSERT INTO `photos` (`id`,`url`,`id_productinformation`) VALUES
-- -- ('','','');
-- -- INSERT INTO `relatedProducts` (`id`,`id_productinformation`) VALUES
-- -- ('','');
-- -- INSERT INTO `actualRelatedProduct` (`id`,`id_relatedProducts`,`id_productinformation`) VALUES
-- -- ('','','');