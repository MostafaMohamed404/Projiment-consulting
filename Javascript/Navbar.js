
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
  });

  // Click outside to close
  document.addEventListener("mousedown", (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      mobileMenu.classList.add("translate-x-full");
    }
  });

  // HR dropdown mobile
const hrBtn = document.getElementById("mobile-hr-btn");
const hrMenu = document.getElementById("mobile-hr-menu");

hrBtn.addEventListener("click", () => {
  hrMenu.classList.toggle("hidden");
});


  // AOS Animation
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
  });

