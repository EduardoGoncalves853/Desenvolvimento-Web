-- DDL
CREATE TABLE IF NOT EXISTS students(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  cpf TEXT NOT NULL UNIQUE,
  age NUMERIC
);

-- DML
--insere em students os VALORES -->
INSERT INTO students (name, age, cpf, city)
VALUES 
("Eduardo", 19, "123.123.123-01", "Jucás"),
("Jorge", 34, "123.123.123-02", "Iguatu"),
("Maurício", 21, "123.123.123-03", "Cariús");
--123.123.123-12

-- UPDATE 
--modifica os registros existentes
UPDATE students
SET age = 29 
WHERE id = 11;

UPDATE students
SET city = "Saboeiro"
WHERE id = 13;


-- DQL
-- selecione de students
SELECT * FROM students;

-- Selecionar idade se (age)
-- for maior que 13 ou id for igual 16
SELECT name, age
FROM students
WHERE age > 13 OR id = 16;

-- SELECIONE de students
-- ONDE (age) maior que 18
-- ORDENA a idade em decrescente
SELECT * FROM students
WHERE age > 18
ORDER BY age DESC;

-- DDL
-- Adicionar coisas na tabela
ALTER TABLE students
ADD COLUMN city TEXT;

-- add coluna (sex), "Masculino" como DEFAULT (padrão)
ALTER TABLE students
ADD COLUMN sex TEXT
NOT NULL DEFAULT "Masculino";

ALTER TABLE students
ADD COLUMN cpf 

-- Deletar coluna
ALTER TABLE students
DROP COLUMN city;

-- challenge DML
-- atualize students e defina city como jucás
UPDATE students
SET city = "Jucás";