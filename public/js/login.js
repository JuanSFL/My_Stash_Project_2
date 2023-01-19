const loginFormHandler = async (event) => {
  console.log(event.target)
  event.preventDefault();

  // Collect values from the login form
  const email = document.getElementById('#email-login').value.trim();
  const password = document.getElementById('#password-login').value.trim();
console.log(email,password)
  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/javascript' },
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
  console.log(event.target)
  event.preventDefault();

  const inputs = document.querySelectorAll(".form-input")
 
  let name=""
  let email=""
  let password=""

inputs.forEach((input,idx) =>{
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


const signButton = document.getElementById('#signButton')
const loginButton = document.getElementById('#loginButton')

signButton.addEventListener('submit', signupFormHandler)
loginButton.addEventListener('submit', loginFormHandler)