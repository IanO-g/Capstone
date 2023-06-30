use collections_test;

delimiter //
create procedure set_known_good_state()
begin
    
    delete from collection;
    alter table collection auto_increment = 1;

    insert into collection (app_user_id, `name`, `value`)
    values 
        (1, 'test', 200),
        (1,'testTwo', 303.56),
        (2, 'testThree', 2123.78);
	
    delete from item;
    alter table item auto_increment = 1;
    
	insert into item (`name`,collection_id,`value`)
    values 
		('test', 1, 20.12),
        ('testTwo',2,44.10),
        ('testThree',1,5.15);
    
end //

delimiter ;