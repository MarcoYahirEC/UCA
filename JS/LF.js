
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
 
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

 
  console.log("Nombre de Usuario:", username);
  console.log("Contraseña:", password);

 
   window.location.href = "Colocar.html";
});