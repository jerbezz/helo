select u.helo_username, p.posts_id, p.posts_title, p.posts_img, p.posts_content, p.posts_author_id
from helo_posts p
join helo_users u on p.posts_author_id = u.helo_id;