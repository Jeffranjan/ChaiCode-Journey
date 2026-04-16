CREATE TABLE users (
    user_id serial primary key

    username varchar(250) unique not null
    email varchar(255) unique not null
    password_hash varchar(250) not null    

    first_name varchar(50)
    last_name varchar(50)

    is_active boolean default true
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
)

insert into users(username, email, password_hash)