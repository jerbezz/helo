create table helo_users (
helo_id serial primary key,
helo_username varchar(20),
helo_password varchar(20),
helo_pic text)

create table helo_posts (
posts_id serial primary key,
posts_title varchar(45),
posts_img text,
posts_content text,
posts_author_id integer references helo_users(helo_id));



select posts_content from helo_posts
where posts_id >
(select max(posts_id) from helo_posts
where posts_id = 2)
