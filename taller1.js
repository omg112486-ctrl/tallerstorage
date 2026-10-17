function guardar() {

    let nombre = document.getElementById("nombre").value.trim();
    let ciudad = document.getElementById("ciudad").value.trim();

    
    if (nombre === "") {
        alert("Por favor escriba un nombre.");
        return;
    }

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("ciudad", ciudad);

    
    window.location.href = "taller2.html";
}