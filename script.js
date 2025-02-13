const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

// Funções para abrir e fechar o menu móvel
function openMenu() {
  sideMenu.style.transform = "translateX(0)";
}

function closeMenu() {
  sideMenu.style.transform = "translateX(100%)";
}

// Adiciona o evento de scroll para mudar o estilo da barra de navegação
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navBar.classList.add(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm"
    );
    navLinks.classList.remove("bg-white", "shadow-sm", "bg-opacity-50");
  } else {
    navBar.classList.remove(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm"
    );
    navLinks.classList.add("bg-white", "shadow-sm", "bg-opacity-50");
  }
});

// Fecha o menu móvel ao clicar em um link
document.querySelectorAll("#sideMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

// Adiciona scroll suave para todos os links âncora
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Evita o comportamento padrão do link
    const targetId = this.getAttribute("href"); // Pega o ID do alvo
    const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" }); // Rola suavemente até o alvo
    }
  });
});
