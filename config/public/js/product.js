const product_name = document.querySelector('#product_name').textContent;
const description = document.querySelector('#description').textContent;
const price = document.querySelector('#price').textContent;
const src = document.querySelector('#img').src;
const cartBtn = document.querySelector('#addCart');
const productId = cartBtn.value;
const cart = [];

const addCart = async () => {
    let product = {
        id: productId,
        name: product_name,
        description: description,
        price: price,
        img: src,
    };
    console.log(product);

    cart.push(product);
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
};

cartBtn.addEventListener('click', addCart);