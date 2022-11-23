
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function entrar(){
var usuario = document.getElementById("usuario").value;
var password = document.getElementById("password").value;
if ( usuario == "admin" && password == "admin"){
alert ("ingresando...");
window.location = "/administrador.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("numero de intentos:  "+attempt+" intentos;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("usuario").disabled = true;
document.getElementById("password").disabled = true;
// document.getElementById("btnentrar").disabled = true;
return false;
}
}
}

 