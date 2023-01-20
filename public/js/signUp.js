console.log("hello")
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
      console.log(response.ok)
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signButton = document.getElementById('signButton')
  console.log(signButton)
  signButton.addEventListener('click', signupFormHandler)