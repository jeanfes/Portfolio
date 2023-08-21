document.addEventListener("DOMContentLoaded", function () {
    const loading = document.getElementById("loading");
    const htmlElement = document.querySelector("html"); // Cambia el selector según tu necesidad

    // Verificar si la página ya se ha cargado antes
    const pageLoadedBefore = localStorage.getItem("pageLoadedBefore");

    if (!pageLoadedBefore) {
        // Mostrar el loading y bloquear el desplazamiento
        htmlElement.classList.add("lock-scroll");

        setTimeout(function () {
            if (loading) {
                loading.style.display = "none";
                // Eliminar la clase "lock-scroll" y almacenar en el almacenamiento local
                htmlElement.classList.remove("lock-scroll");
                localStorage.setItem("pageLoadedBefore", "true");
            }
        }, 3000); // 5000 milisegundos = 5 segundos
    } else {
        // Si la página ya se ha cargado antes, ocultar el loading
        if (loading) {
            loading.style.display = "none";
        }
    }
});
