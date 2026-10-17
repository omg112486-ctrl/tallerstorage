function guardar() {

    let nombre = document.getElementById("nombre").value.trim();
    let ciudad = document.getElementById("ciudad").value.trim();

    // RETO 2
    if (nombre === "") {
        alert("Por favor escriba un nombre.");
        return;
    }

    // RETO 1
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("ciudad", ciudad);

    // Ir a la página 2
    window.location.href = "taller2.html";
}