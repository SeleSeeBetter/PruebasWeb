document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formCompra");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Con esto evitaremos que se recargue la página.

        const nombre = document.getElementById("nombre").value;
        const concierto = document.getElementById("concierto").value;
        const cantidad = document.getElementById("cantidad").value;
        const categoria = document.getElementById("categoria").value;
        const metodoPago = document.querySelector('input[name="pago"]:checked').value;

        // Guardamos los datos en sessionStorage
        sessionStorage.setItem("nombre", nombre);
        sessionStorage.setItem("concierto", concierto);
        sessionStorage.setItem("cantidad", cantidad);
        sessionStorage.setItem("categoria", categoria);
        sessionStorage.setItem("pago", metodoPago);

        window.location.href = "confirmacion.html";
    });
});
document.addEventListener("DOMContentLoaded", function () { // Aseguramos que no haya campos vacíos.
    if (document.getElementById("conf-nombre")) {
        document.getElementById("conf-nombre").textContent = sessionStorage.getItem("nombre") || "No especificado";
        document.getElementById("conf-concierto").textContent = sessionStorage.getItem("concierto") || "No especificado";
        document.getElementById("conf-cantidad").textContent = sessionStorage.getItem("cantidad") || "No especificado";
        document.getElementById("conf-categoria").textContent = sessionStorage.getItem("categoria") || "No especificado";
        document.getElementById("conf-pago").textContent = sessionStorage.getItem("pago") || "No especificado";
    }
});
