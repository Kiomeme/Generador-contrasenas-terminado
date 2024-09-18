let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");
let limpieza = document.getElementById("limpiar");
let verificacion = document.getElementById("verificar");

const cadenaCaracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generar() {
  let numeroDigitado = parseInt(cantidad.value);

  if (numeroDigitado < 6) {
    alert("La cantidad de caracteres debe ser mayor que 6");
  }
  let password = "";

  for (let x = 0; x < numeroDigitado; x++) {
    let caracterAleatorio =
      cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];

    password += caracterAleatorio;
  }
  contrasena.value = password;
}

function limpiar() {
  cantidad.value = "";
  contrasena.value = "";
}

function verificar() {
  let password = contrasena.value;
  let mayusculas = /[A-Z]/.test(password);
  let caracteres = /[!@#$%^&*()]/.test(password);
  if (mayusculas && caracteres) {
    alert("La contrasena es segura");
  } else {
    alert("La contrasena no es segura");
  }
}
