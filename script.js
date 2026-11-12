const boton = document.getElementById("tema");

function aplicarTema(oscuro) {
  document.body.classList.toggle("oscuro", oscuro);
  boton.textContent = oscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
}

aplicarTema(localStorage.getItem("tema") === "oscuro");

boton.addEventListener("click", () => {
  const oscuro = !document.body.classList.contains("oscuro");
  localStorage.setItem("tema", oscuro ? "oscuro" : "claro");
  aplicarTema(oscuro);
});
