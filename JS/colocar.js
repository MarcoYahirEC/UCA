function cambiarF(){
    var div = document.getElementById("miDiv");
    //modificando contenido
    div.innerHTML = "<h1>Nuevo Titulo hecho con innerHTML</h1><p>Contenido Nuevo con innerHTML</p>";
  }
function cambiarcontenido2(){

    var div = document.getElementById("miDiv");

    var nuevotexto = document.createTextNode("Titulo nuevo");

    div.appendChild(nuevotexto);

    var nuevoparrafo = document.createElement("p");

    nuevoparrafo.textContent = "contenido ejemplo";

    div.appendChild(nuevoparrafo);
}
    function pedirCoca(){
        const pedido = "Coca Cola";
        const respuesta = "tu pedido de"+ pedido + "ha sido enviado";
        const elementoRespuesta = document.getElementById("respuesta");
        elementoRespuesta.textContent = respuesta;
        elementoRespuesta.style.display="block";
    }

