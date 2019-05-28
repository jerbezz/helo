update helo_posts
set posts_title = $1,
posts_content = $2
where posts_id = $3