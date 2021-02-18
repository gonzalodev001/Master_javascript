/**
 * Modifica las funciones para implementar la funcionalidad especificada.
 * Puedes añadir funciones adicionales si lo necesitas.
 * Este archivo debe ser ejecutable (no incluyas código inválido
 * o no relacionado con el ejercicio).
 */

function validate_password(pass) {
  /* ... */
  const regEx = /^(?=\w*\d)(?=\w*[A-Z])(?=.*[\u0021-\u002b\u003c-\u0040])(?=\w*[a-z])\S{8,16}$/;
  if(regEx.test(pass)){
    console.log("Coicide");
  }else{
    console.log("No coicide");
  }
  
}
