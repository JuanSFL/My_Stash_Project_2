const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
console.log(event.target.children)
  const inputs = document.querySelectorAll(".form-input")
 console.log(inputs)
//  const formGroups = event.target.children.forEach((group,idx) =>{
//   console.log(group,idx)
//   return group[1]
//  })
//  console.log(formGroups)
  // const name = document.querySelector('#name-signup').value.trim();
  // const email = document.querySelector('#email-signup').value.trim();
  // const password = document.querySelector('#password-signup').value.trim();

  let name=""
  let email=""
  let password=""

inputs.forEach((input,idx) =>{
  console.log(input,idx)
  console.log(input.type)
  if (input.type === "password"){
    password = input.value
  }

  if(input.type === "email"){
    email = input.value
  }
if(input.type === "text"){
  name = input.value
}
  
})
 console.log(name, email, password)
  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};


