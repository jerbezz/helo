insert into helo_users
(
    helo_username,
    helo_password
)
values
(
    $1,
    $2
)
returning helo_id, helo_username;