# Validaciòn.

Este es una validaciòn de un formulario que utliliza principalmente Javascript para su funcionalidad.
<div align="center">
<img src="Captura de pantalla (2).png" width="800">
</div>

***

<div align="center">
<img src="Captura de pantalla (3).png" width="800">
</div>


***



## Archivos.

- `index.html`: El archivo principal HTML contiene la estructura de la validaciòn.

- `index.css`: El archivo CSS contiene los estilos de la validaciòn del formulario. (index.html)

- `Validacion.js`: El archivo Javascript es el que contiene la logistica de la validacion, incluye las funciones que validan que los datos sean correctos con lo señalado en el formulario.

## Validaciòn del formulario.

Aqui el como se valida los datos enviados:

```python
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


username.addEventListener("input", (e) => {
  let info = e.target.parentElement.children[2];
  usernameValidation = validation(e, userRegex, username, info);
  confirmarInput()
})
```