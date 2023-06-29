use collections_test;

delimiter //
create procedure set_known_good_state()
begin
	
    truncate item;    
    truncate collection;
	truncate app_user;
    
-- passwords are set to "P@ssw0rd!"
	insert into item (`name`,collection_id,`value`)
    values 
		('test', 1, 20.12),
        ('testTwo',2,44.10),
        ('testThree',1,5.15);
        
	insert into collection (app_user_id, `name`, `value`)
    values 
        (1, 'test', 200),
        (1,'testTwo', 303.56),
        (2, 'testThree', 2123.78);
        
	insert into app_user (username, password_hash, enabled)
		values
		('john@smith.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1),
		('sally@jones.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1);
    
end //

delimiter ;