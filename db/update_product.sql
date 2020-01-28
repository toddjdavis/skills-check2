update products
set price = $3,
    name = $1,
    imageURL = $2
where id = $4;

select * from products
order by id;