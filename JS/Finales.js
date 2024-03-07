function pedirFinal1(){
    const pedido = "Final 1";
    const respuesta = "tu pedido de"+ pedido + "ha sido enviado";
    const elementoRespuesta = document.getElementById("Final 1");
    elementoRespuesta.textContent = respuesta;
    elementoRespuesta.style.display="block";
}