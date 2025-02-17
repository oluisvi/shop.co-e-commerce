document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".custumer-ratings");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
  
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
  
    function moveRight() {
      const firstItem = carousel.firstElementChild;
      carousel.appendChild(firstItem);
      updateBlurEffect();
    }
  
    function moveLeft() {
      const lastItem = carousel.lastElementChild;
      carousel.insertBefore(lastItem, carousel.firstElementChild);
      updateBlurEffect();
    }
  
    rightArrow.addEventListener("click", moveRight);
    leftArrow.addEventListener("click", moveLeft);
  
    // Mobile scroll functionality
    if (window.innerWidth <= 391) {
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
        e.preventDefault();
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Ajuste de velocidade
        carousel.scrollLeft = scrollLeft - walk;
      });
    }
  
    updateBlurEffect();
  });
  
