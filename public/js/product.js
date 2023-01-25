const addToCart = async (event) => {
    event.preventDefault();

    const product_name = document.querySelector('#product_name').textContent;
    const description = document.querySelector('#description').textContent;
    const price = document.querySelector('#price').textContent;
    const src = document.querySelector('#img').src;
    const product_id = document.querySelector('#addCart').value;

    console.log(product_name, description, price, src, product_id)

    if (product_name, description, price, src, product_id) {
        const response = await fetch(`/api/cart`, {
        method: 'POST',
        body: JSON.stringify({ product_name, description, price, src, product_id }),
        headers: {
            'Content-Type': 'application/json',
        },
        });

        if (response.ok) {
        document.location.replace('/cart');
        } else {
        alert('Failed to add to cart');
        }
    }
};


document.querySelector('#addCart').addEventListener('click', addToCart);