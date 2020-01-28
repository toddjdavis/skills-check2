insert into products(
    name,
    imageURL,
    price
) values (
    $1,
    $2,
    $3
);

select * from products
order by id;