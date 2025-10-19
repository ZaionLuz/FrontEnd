let contador = 0;
const btn = document.getElementById("contadorBtn");
const contadorSpan = document.getElementById("contador");
const vezesSpan = document.getElementById("vezes");
const icon = document.getElementById("icon");
const body = document.body;

btn.addEventListener("click", () => {
  contador++;
  contadorSpan.textContent = contador;
  vezesSpan.textContent = contador;

  // alterna entre sol e lua a cada clique
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    icon.textContent = "🌞";
  } else {
    body.classList.add("dark");
    icon.textContent = "🌙";
  }
});
