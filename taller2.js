window.onload = function () {

    // RETO 3
    let nombre = localStorage.getItem("nombre");
    let ciudad = localStorage.getItem("ciudad");

    document.getElementById("saludo").innerHTML =
        "Hola, <strong>" + nombre + "</strong>, de <strong>" + ciudad + "</strong>";
}

// RETO 4
function borrarDatos() {

    localStorage.clear();

    alert("Datos eliminados correctamente.");

    window.location.href = "index.html";
}