update products
set price = ${price},
    name = ${name},
    imageURL = ${imageURL}
where id = ${id};

select * from products