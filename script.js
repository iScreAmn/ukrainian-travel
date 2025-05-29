const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Показать или скрыть кнопку при прокрутке
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Плавная прокрутка наверх при клике
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });