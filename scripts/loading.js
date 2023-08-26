window.onload = function() {
    const loading = document.getElementById("loading");
  
    if (loading) {
      htmlElement.classList.add("lock-scroll");
      loading.style.display = "block"; // Mostrar el loading
      setTimeout(function() {
        htmlElement.classList.remove("lock-scroll");
        loading.style.display = "none"; // Ocultar el loading después de 3 segundos
      }, 2000); // 2000 milisegundos
    }
  };
  