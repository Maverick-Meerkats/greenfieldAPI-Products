-- DROP DATABASE IF EXISTS greenFieldProducts;
CREATE DATABASE "greenFieldProducts";
\c "greenFieldProducts"
    CREATE TABLE productinfo
(
    id integer NOT NULL,
    name character varying(100) COLLATE pg_catalog."default",
    slogan character varying COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    category character varying(255) COLLATE pg_catalog."default",
    default_price character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT productinfo_pkey PRIMARY KEY (id)
);
    

-- ALTER TABLE productinfo
--     OWNER to postgres;

    CREATE TABLE related
(
    id integer NOT NULL,
    current_product_id integer,
    related_product_id integer,
    CONSTRAINT related_pkey PRIMARY KEY (id)
);



-- -- Table: styles

-- DROP TABLE styles;

CREATE TABLE styles
(
    id integer NOT NULL,
    productid integer,
    name character varying(60) COLLATE pg_catalog."default",
    sale_price character varying(5) COLLATE pg_catalog."default",
    original_price integer,
    default_style smallint,
    CONSTRAINT styles_pkey PRIMARY KEY (id),
    CONSTRAINT product_idkey FOREIGN KEY (productid)
        REFERENCES productinfo (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);


-- -- Index: fki_product_idkey

-- DROP INDEX fki_product_idkey;

CREATE INDEX fki_product_idkey
    ON styles USING btree
    (productid)
    TABLESPACE pg_default;

--     -- Table: photos

-- DROP TABLE photos;

CREATE TABLE photos
(
    id integer NOT NULL,
    "styleId" integer,
    url text COLLATE pg_catalog."default",
    thumbnail_url text COLLATE pg_catalog."default",
    CONSTRAINT photos_pkey PRIMARY KEY (id),
    CONSTRAINT style_id FOREIGN KEY ("styleId")
        REFERENCES styles (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

-- TABLESPACE pg_default;

-- ALTER TABLE photos
--     OWNER to postgres;
-- -- Table: features

-- DROP TABLE features;

CREATE TABLE features
(
    id integer NOT NULL,
    product_id integer,
    feature character varying(55) COLLATE pg_catalog."default",
    value character varying(55) COLLATE pg_catalog."default",
    CONSTRAINT features_pkey PRIMARY KEY (id),
    CONSTRAINT "feature_productId" FOREIGN KEY (product_id)
        REFERENCES productinfo (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);


-- -- Index: fki_feature_productId

-- DROP INDEX "fki_feature_productId";

CREATE INDEX "fki_feature_productId"
    ON features USING btree
    (product_id);
    -- TABLESPACE pg_default;
-- Index: photos_styleid_index

-- DROP INDEX photos_styleid_index;

CREATE INDEX photos_styleid_index
    ON photos USING btree
    ("styleId");
    -- TABLESPACE pg_default;


--     -- Table: skus

-- DROP TABLE skus;

CREATE TABLE skus
(
    id integer NOT NULL,
    styleid integer,
    size character varying(20) COLLATE pg_catalog."default",
    quantity integer,
    CONSTRAINT skus_pkey PRIMARY KEY (id),
    CONSTRAINT style_key FOREIGN KEY (styleid)
        REFERENCES styles (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);


-- -- Index: skus_styleid_index

-- DROP INDEX skus_styleid_index;

CREATE INDEX skus_styleid_index
    ON skus USING btree
    (styleid);
    -- TABLESPACE pg_default;