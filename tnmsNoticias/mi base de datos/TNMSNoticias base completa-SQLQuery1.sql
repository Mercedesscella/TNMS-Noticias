use tnms_noticias

create table users(

id int IDENTITY(1,1) NOT NULL PRIMARY KEY, 
name varchar (100),
first_name varchar (100),
last_name varchar (100),
avatar varchar (100),
email varchar (200),
password varchar (50),
type varchar (100),
created_at time,
updated_at time
)

create table categories(

id int IDENTITY(1,1) NOT NULL PRIMARY KEY, 
name varchar (100)
)

create table articles(
id int IDENTITY(1,1) NOT NULL PRIMARY KEY, 
title varchar (100),
excerpt text,
content text,
created_at time,
updated_at time,
user_id int,
FOREIGN KEY(user_id)
REFERENCES	users(id),
category_id int,
FOREIGN KEY(category_id )
references categories(id)
)

create table pothos(
id int IDENTITY(1,1) NOT NULL PRIMARY KEY, 
file_path varchar (100),
articles_id int,
created_at time,
updated_at time,
FOREIGN KEY(articles_id)
REFERENCES	articles(id),
)

create table vicits(
id int IDENTITY(1,1) NOT NULL PRIMARY KEY, 
user_id int,
FOREIGN KEY(user_id)
REFERENCES	users(id),
articles_id int,
FOREIGN KEY(articles_id)
REFERENCES	articles(id),
)

create table favorites(
id int IDENTITY(1,1) NOT NULL PRIMARY KEY, 
user_id int,
FOREIGN KEY(user_id)
REFERENCES	users(id),
articles_id int,
FOREIGN KEY(articles_id)
REFERENCES	articles(id),
)

create table coment(
id int IDENTITY(1,1) NOT NULL PRIMARY KEY, 
rating int,
content text,
created_at time,
updated_at time,
user_id int,
FOREIGN KEY(user_id)
REFERENCES	users(id),
articles_id int,
FOREIGN KEY(articles_id)
REFERENCES	articles(id),
)