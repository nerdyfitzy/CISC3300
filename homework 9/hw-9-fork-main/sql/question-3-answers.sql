-- select by id 1:
SELECT * FROM posts P WHERE P.id = 1;

-- select all posts where title = includes "title 2":
SELECT * FROM posts P WHERE CHARINDEX(P.title, "title 2") > 0;

-- select all posts and order by the title column alphabetically:
SELECT * FROM posts P ORDER BY P.title DESC;

-- insert 3 new posts
INSERT INTO posts (title, description) VALUES ('new one', 'desc 1');
INSERT INTO posts (title, description) VALUES ('new two', 'desc 2');
INSERT INTO posts (title, description) VALUES ('new three', 'desc 3');


-- update posts where id = 1, set the title to "new title"
UPDATE posts SET title = 'new title' WHERE id = 1;

-- delete post where id = 2
DELETE FROM posts WHERE id = 2;