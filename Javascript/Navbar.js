const headerContainer = document.getElementById("header");

if (headerContainer) {
  fetch("/Components/header.html")
    .then(res => res.text())
    .then(html => {
      headerContainer.innerHTML = html;
      initNavbar();
    })
    .catch(err => console.error("HEADER ERROR:", err));
}

function initNavbar() {
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuBtn || !mobileMenu) {
    console.error("Navbar elements not found");
    return;
  }

  menuBtn.onclick = () => {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
  };

  closeBtn.onclick = () => {
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
  };
}
