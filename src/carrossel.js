document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".custumer-ratings");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  let activeIndex = 0;
  const items = Array.from(carousel.children);

  function updateBlurEffect() {
    if (window.innerWidth > 390) { // Aplica blur apenas em telas maiores
      requestAnimationFrame(() => {
        const items = carousel.children;
        Array.from(items).forEach((item) => item.style.filter = "none");
        if (items.length > 1) {
          items[0].style.filter = "blur(3px)";
          items[items.length - 1].style.filter = "blur(3px)";
        }
      });
    } else {
      Array.from(carousel.children).forEach((item) => item.style.filter = "none");
    }
  }

  // Função para atualizar a visibilidade dos itens (especialmente para dispositivos móveis)
  function updateVisibility() {
    if (window.innerWidth <= 390) { // Para telas menores que 391px, apenas visibilidade
      items.forEach((item, index) => {
        if (index === activeIndex) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    } else {
      updateBlurEffect(); // Aplica o blur para telas maiores
    }
  }

  // Função para mover o carrossel para a direita
  function moveRight() {
    activeIndex = (activeIndex + 1) % items.length; // Avança para o próximo item
    carousel.appendChild(carousel.firstElementChild); // Move o primeiro item para o final
    updateVisibility();
    updateBlurEffect(); // Atualiza o efeito de desfoque após a movimentação
  }

  // Função para mover o carrossel para a esquerda
  function moveLeft() {
    activeIndex = (activeIndex - 1 + items.length) % items.length; // Volta para o item anterior
    carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild); // Move o último item para o início
    updateVisibility();
    updateBlurEffect(); // Atualiza o efeito de desfoque após a movimentação
  }

  // Adiciona os event listeners para as setas
  rightArrow.addEventListener("click", moveRight);
  leftArrow.addEventListener("click", moveLeft);

  // Funcionalidade de rolagem para dispositivos móveis
  let isDragging = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener("touchend", () => {
    isDragging = false;
  });

  carousel.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste de velocidade
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Inicializa a visibilidade e o efeito de desfoque
  updateVisibility();
});
