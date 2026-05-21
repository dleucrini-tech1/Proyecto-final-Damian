

let botonform = document.querySelector("#btncontacto");

botonform.addEventListener("submit", (e) =>{

    e.preventDefault();

let nombre = document.querySelector("#usuario").value;

let contrasena = document.querySelector("#contrasena").value;

console.log (`nombre: ${nombre} contraseña: ${contrasena}`);

})






