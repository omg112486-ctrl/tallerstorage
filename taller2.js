window.onload = function () {

    
    let nombre = localStorage.getItem("nombre");
    let ciudad = localStorage.getItem("ciudad");

    document.getElementById("saludo").innerHTML =
        "Hola, <strong>" + nombre + "</strong>, de <strong>" + ciudad + "</strong>";
}



function borrarDatos() {

    localStorage.clear();

    alert("Datos eliminados correctamente.");

    window.location.href = "index.html";
}