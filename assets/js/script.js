  
   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
   const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
   
  // esta función realiza el cambio de color del navbar al momento de realizar scroll
  document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) { 
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    });
  });
  
  // Inicio validación de formulario

  document.getElementById('myForm').addEventListener('submit', function(event) {
 
  event.preventDefault();

  // traer los valores 
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');

  // Expresión regular para validar correo
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

 
  let formIsValid = true;

  // Validar que el usuario ingrese mas de 3 caracteres
  if (name === '' || name.length < 3) {
      nameError.textContent = 'Ups! Ingresar tu nombre (más de 3 caracteres)';
      nameError.style.display = 'block';
      formIsValid = false;
  } else {
      nameError.style.display = 'none';
  }

  // Valida email correcto
  if (!emailPattern.test(email)) {
      emailError.textContent = 'Debes ingresar un correo válido';
      emailError.style.display = 'block';
      formIsValid = false;
  } 
  else {
      emailError.style.display = 'none';
  }

  // si todos los campos del formulario son validos se envie el mensaje
  if (formIsValid) {
      alert('Correo Enviado!');

  }
  });