const cartList = document.querySelector('#cartList');

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/cart/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/cart');
      } else {
        alert('Failed to delete product');
      }
    }
};

cartList.addEventListener('click', delButtonHandler);

let subtotal = []


$.get('/api/cart').then(function(cartResponse){
  console.log(cartResponse)

  $.each(cartResponse, function (i) {
    const price = cartResponse[i].price;
    console.log(price);
    subtotal = Number(subtotal) + Number(price);
    console.log(subtotal)
  });
  
  console.log(subtotal);
  const subtotalPrice = document.querySelector('#subtotal');
  subtotalPrice.textContent = subtotal.toFixed(2);

  const tax = subtotal * 0.06;
  const taxPrice = document.querySelector('#tax');
  taxPrice.textContent = tax.toFixed(2);

  const total = Number(subtotal) + Number(tax);
  const totalPrice = document.querySelector('#total');
  totalPrice.textContent = total.toFixed(2);
});

const addBoughtHistory = async () => {
  const product_id = document.querySelector('#product_name').getAttribute('data-id');
  const date = new Date();
  const itemPurchased = true;

  console.log(product_id)

  let response = await fetch(`/api/products/history`, {
      method: 'POST',
      body: JSON.stringify({ date, product_id, itemPurchased }),
      headers: {
          'Content-Type': 'application/json',
      },
  });

  if (response.ok) {
    let response = await fetch(`/api/cart`, {
      method: 'DELETE',
      body: JSON.stringify({product_id}),
    });
    
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      console.log('Failed to delete cart');
    }
  } else {
      console.log('Failed to create history');
  };
};

document.querySelector('#checkoutBtn').addEventListener('click', addBoughtHistory);
