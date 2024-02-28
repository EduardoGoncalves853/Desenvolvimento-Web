
-- class-02-modeling

CREATE TABLE students(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    id_course INTEGER REFERENCES courses(id) ON DELETE CASCADE
);
-- id_course INTEGER REFERENCES courses(id) ⬇
-- define uma coluna que armazena IDs de cursos
-- e estabelece uma relação com a tabela de cursos.

DROP TABLE students;

CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    workload INTEGER NOT NULL 
);

DROP TABLE courses;

INSERT INTO students (name, email, id_course)VALUES
    ("Erick", "erick@gmail.com", 1),
    ("Jorge", "jorge@gmail.com", 2),
    ("Daniel", "daniel@gmail.com", 2);
    
INSERT INTO courses (name, workload)VALUES
    ("Web Development", 360),
    ("Data Analysis", 240),
    ("Cyber Security", 240);
    
SELECT * FROM students;
SELECT * FROM courses;

--courses.name => name:1
--courses.name AS course => course     
SELECT students.name, courses.name AS course FROM students
LEFT JOIN courses
ON students.id_course = courses.id
WHERE course IS NOT NULL;

-- INNER , JOIN, LEFT, FULL
-- (INNER JOIN) faz uma junção interna, com as informações dadas
--EX: ID, NAME...