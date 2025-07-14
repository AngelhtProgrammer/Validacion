// Regex- Expresiones regulares
const userRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/; // min 6, max 16, contain: 1 letra y 1 numero
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$/; // min 6, max 12, contain: 1 letra y 1 numero
const emailRegex = /^\S+@\S+\.\S{2,4}$/; // contain: @, . y la extension debe ser de min 2 y max 4
const phonenumberRegex = /^[0-9]{7,16}$/; // solo numeros, min 7, max 16 digitos
// console.log(userRegex.test(Paco44));

// Selectores

let countries = document.querySelector("#countries");
let username = document.querySelector("#user");
let emailC = document.querySelector("#email");
let phoneN = document.querySelector("#phone");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let phoneCode = document.querySelector("#phoneCode");
let botonForm = document.querySelector("#botonFormulario");
let Form = document.querySelector("#form");
let infoP = document.querySelector("#information2");

// Operador de propagacion.  Convierte los elementos en un array
let arrayCountries = [...countries];

// console.log(arrayCountries);

// Iteracion
arrayCountries.forEach((country) => {
  let onlyContries = country.innerText.split("(")[0];
  country.innerHTML = onlyContries;
});
// console.log(Contries);

// Validacion
// Validaciones

let usernameValidation = false;
let emailValidation = false;
let phoneValidation = false;
let passwordValidation = false;
let confirmPasswordValidation = false;
let countriesValidation = false;


// Funcion para habilitar el boton de envio del formulario              

function confirmarInput() {
  const FormValido =
    usernameValidation &&
    emailValidation &&
    phoneValidation &&
    passwordValidation &&
    confirmPasswordValidation &&
    countriesValidation;
    
  botonForm.disabled = !FormValido ? true : botonForm.removeAttribute('disabled')
}


//  Funcion de validacion

function validation(e, regex, selector, info) {
  let inputValue = e.target.value;
  const passwordValue = password.value;
  let validate =
    regex === "confirmPassword"
      ? passwordValue === inputValue && passwordValue != ''
      : regex.test(inputValue); // if = ?   else = :

  if (validate) {
    selector.classList.remove("incorrecto");
    selector.classList.add("correcto");
    info.classList.add("information");
  } else {
    selector.classList.remove("correcto");
    selector.classList.add("incorrecto");
    info.classList.remove("information");
  }
  return validate;
  
}

// input a evaluar

username.addEventListener("input", (e) => {
  let info = e.target.parentElement.children[2];
  usernameValidation = validation(e, userRegex, username, info);
  confirmarInput()
});

emailC.addEventListener("input", (e) => {
  let info = e.target.parentElement.children[2];
  emailValidation = validation(e, emailRegex, emailC, info);
  confirmarInput()
});

phoneN.addEventListener("input", (e) => {
  let info = e.target.parentElement.children[3];
  phoneValidation = validation(e, phonenumberRegex, phoneN, info);
  confirmarInput()
});


password.addEventListener("input", (e) => {
  let info = e.target.parentElement.children[2];
  passwordValidation = validation(e, passwordRegex, password, info);
  confirmarInput()
});

countries.addEventListener("change", function () {
  codeNumber = this.value;
  phoneCode.innerHTML = `+${codeNumber}`;
  let info = this.parentElement.children[2];
  countries.classList.add("correcto");
  phoneCode.classList.add("correcto");
  infoP.classList.add("information")
  countriesValidation = codeNumber != "" ? true : false;
  confirmarInput()
});

confirmPassword.addEventListener("input", (e) => {
  let info = e.target.parentElement.children[2];
  const idConfirmPassword = e.target.id;

  confirmPasswordValidation = validation(
    e,
    idConfirmPassword,
    confirmPassword,
    info
  );
  confirmarInput()
});

Form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que se recargue la página al enviar el formulario
  const user = {
    username: username.value,
    email: emailC.value,
    phone: `${phoneCode.innerHTML} ${phoneN.value}`,
    password: password.value,
  };
    let mensaje = (
      'Username: ' + username.value + "\n" +
      'Email: ' + emailC.value + "\n" +   
      'Phone: ' + `${phoneCode.innerHTML} ${phoneN.value}`
    )
  console.log("Formulario enviado. Datos:", user);
  console.log(mensaje);
  alert(`Formulario enviado. \n Datos: \n ${mensaje}`)
});

