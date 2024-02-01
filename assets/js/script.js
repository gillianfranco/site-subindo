function dropdown() {
    var dropdown = document.getElementById("lista__links_secundarios");

    // Verifica se o dropdown está visível
    if (dropdown.style.display === "none") {
      // Se estiver escondido, mostra o dropdown
      dropdown.style.display = "block";
    } else {
      // Se estiver visível, esconde o dropdown
      dropdown.style.display = "none";
    }
  }