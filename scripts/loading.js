window.onload = function() {
    const loading = document.getElementById("loading");
  
    if (loading) {
      loading.style.display = "block"; // Mostrar el loading
  
      setTimeout(function() {
        loading.style.display = "none"; // Ocultar el loading después de 3 segundos
      }, 2000); // 3000 milisegundos = 3 segundos
    }
  };
  