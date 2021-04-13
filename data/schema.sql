CREATE TABLE IF NOT EXISTS keywords 
( id SERIAL PRIMARY KEY, 
word VARCHAR(250) NOT NULL,
count int NOT NULL );

INSERT INTO keywords (word, count) VALUES( 'فاضي' ,1 );
INSERT INTO keywords (word, count) VALUES( 'bad' ,1 );
INSERT INTO keywords (word, count) VALUES( 'Astronaut' ,1 );
INSERT INTO keywords (word, count) VALUES( 'drake' ,1 );
INSERT INTO keywords (word, count) VALUES( 'in the end' ,1 );