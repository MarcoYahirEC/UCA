function cambiarcontenido(){

    var div = document.getElementById("miDiv");

    div.innerHTML = "<h1>Ejemplo1</h1><p>Ejemplo 2</p>";

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
        const respuesta = "tu pedido de" + pedido + "ha sido enviado";
        const elementoRespuesta = document.getElementById("respuesta");
        elementosRespuesta.textContent = respuesta;
        elementosRespuesta.style.display="block";
    }

