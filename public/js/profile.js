const newFormHandler = async (event) => {
  event.preventDefault();
console.log('click')
  const product_name = document.querySelector('#product-name').value.trim();
  const price = document.querySelector('#product-price').value.trim();
  const description = document.querySelector('#product-desc').value.trim();

  if (product_name && price && description) {
    const response = await fetch(`/api/products`, {
      method: 'POST',
      body: JSON.stringify({ product_name, price, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log(response)
      document.location.replace('/profile');
    } else {
      alert('Failed to create product');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/products/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete product');
    }
  }
};

document
  .querySelector('.new-product-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.product-list')
  .addEventListener('click', delButtonHandler);
