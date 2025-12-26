window.addEventListener('DOMContentLoaded', () => {
  // عناصر الموبايل مينو
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");

  if(menuBtn && mobileMenu){
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-full");
      mobileMenu.classList.add("translate-x-0");
    });
  }

  if(closeMenu && mobileMenu){
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("translate-x-full");
    });
  }

  document.addEventListener("mousedown", (e) => {
    if(mobileMenu && menuBtn && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)){
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("translate-x-full");
    }
  });

  // HR Dropdown Mobile
  const hrBtn = document.getElementById("mobile-hr-btn");
  const hrMenu = document.getElementById("mobile-hr-menu");

  if(hrBtn && hrMenu){
    hrBtn.addEventListener("click", () => {
      hrMenu.classList.toggle("hidden");
    });
  }
});
