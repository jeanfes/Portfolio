window.onload = function() {
    const loading = document.getElementById("loading");
  
    if (loading) {
      loading.style.display = "block"; // Mostrar el loading
      htmlElement.classList.add("lock-scroll");
      setTimeout(function() {
        htmlElement.classList.remove("lock-scroll");
        loading.style.display = "none"; // Ocultar el loading después de 3 segundos
      }, 2000); // 2000 milisegundos
    }
  };
  