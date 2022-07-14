DROP DATABASE gfresh;
CREATE DATABASE gfresh;
\connect gfresh

\i gfresh-schema.sql
\i gfresh-seed.sql