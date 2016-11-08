select products.*, product_images.*, products_in_cart.*
from products_in_cart
join products
on products.id = products_in_cart.product_id
join product_images
on product_images.product_id = products.id
where products_in_cart.order_id = $1
and product_images.cart_img = true
order by products_in_cart.id;
