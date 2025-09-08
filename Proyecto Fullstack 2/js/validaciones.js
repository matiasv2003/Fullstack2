document.getElementById("formRegistro").addEventListener("submit", function(e) {
  e.preventDefault();

  const edad = parseInt(document.getElementById("edad").value);
  const email = document.getElementById("email").value;
  let mensaje = "";

  if (edad < 18) {
    mensaje = "Debes ser mayor de 18 años para registrarte.";
  } else if (email.endsWith("@duoc.cl")) {
    mensaje = "Registro exitoso. ¡Tienes 20% de descuento permanente!";
  } else {
    mensaje = "Registro exitoso.";
  }

  document.getElementById("mensaje").textContent = mensaje;
});