
--make table
CREATE TABLE tasks(
id serial PRIMARY KEY,
task VARCHAR(250),
date_added DATE,
due_by DATE,
completed VARCHAR(7)
);

--some insert
INSERT INTO tasks(task, date_added, due_by, completed)
VALUES('Make datebase', '02-17-2018', '02-17-2018', 'N');