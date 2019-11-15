CREATE DATABASE "greenFieldProducts"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

    CREATE TABLE public.productinfo
(
    id integer NOT NULL,
    name character varying(100) COLLATE pg_catalog."default",
    slogan character varying COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    category character varying(255) COLLATE pg_catalog."default",
    default_price character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT productinfo_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.productinfo
    OWNER to postgres;

    CREATE TABLE public.related
(
    id integer NOT NULL,
    current_product_id integer,
    related_product_id integer,
    CONSTRAINT related_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.related
    OWNER to postgres;

-- Table: public.styles

-- DROP TABLE public.styles;

CREATE TABLE public.styles
(
    id integer NOT NULL,
    productid integer,
    name character varying(60) COLLATE pg_catalog."default",
    sale_price character varying(5) COLLATE pg_catalog."default",
    original_price integer,
    default_style smallint,
    CONSTRAINT styles_pkey PRIMARY KEY (id),
    CONSTRAINT product_idkey FOREIGN KEY (productid)
        REFERENCES public.productinfo (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.styles
    OWNER to postgres;

-- Index: fki_product_idkey

-- DROP INDEX public.fki_product_idkey;

CREATE INDEX fki_product_idkey
    ON public.styles USING btree
    (productid)
    TABLESPACE pg_default;

    -- Table: public.photos

-- DROP TABLE public.photos;

CREATE TABLE public.photos
(
    id integer NOT NULL,
    "styleId" integer,
    url text COLLATE pg_catalog."default",
    thumbnail_url text COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT photos_pkey PRIMARY KEY (id),
    CONSTRAINT style_id FOREIGN KEY ("styleId")
        REFERENCES public.styles (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.photos
    OWNER to postgres;
-- Table: public.features

-- DROP TABLE public.features;

CREATE TABLE public.features
(
    id integer NOT NULL,
    product_id integer,
    feature character varying(55) COLLATE pg_catalog."default",
    value character varying(55) COLLATE pg_catalog."default",
    CONSTRAINT features_pkey PRIMARY KEY (id),
    CONSTRAINT "feature_productId" FOREIGN KEY (product_id)
        REFERENCES public.productinfo (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.features
    OWNER to postgres;

-- Index: fki_feature_productId

-- DROP INDEX public."fki_feature_productId";

CREATE INDEX "fki_feature_productId"
    ON public.features USING btree
    (product_id)
    TABLESPACE pg_default;
-- Index: photos_styleid_index

-- DROP INDEX public.photos_styleid_index;

CREATE INDEX photos_styleid_index
    ON public.photos USING btree
    ("styleId")
    TABLESPACE pg_default;


    -- Table: public.skus

-- DROP TABLE public.skus;

CREATE TABLE public.skus
(
    id integer NOT NULL,
    styleid integer,
    size character varying(20) COLLATE pg_catalog."default",
    quantity integer,
    CONSTRAINT skus_pkey PRIMARY KEY (id),
    CONSTRAINT style_key FOREIGN KEY (styleid)
        REFERENCES public.styles (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.skus
    OWNER to postgres;

-- Index: skus_styleid_index

-- DROP INDEX public.skus_styleid_index;

CREATE INDEX skus_styleid_index
    ON public.skus USING btree
    (styleid)
    TABLESPACE pg_default;