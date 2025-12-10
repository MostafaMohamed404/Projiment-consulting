window.addEventListener('DOMContentLoaded', () => {
  // Carousel
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let current = 0;

  function showSlide(i) {
    slides.forEach((s, idx) => s.style.opacity = idx === i ? '1' : '0');
    dots.forEach((d, idx) => {
      d.className = idx === i ? 'dot w-3 h-3 rounded-full bg-white' : 'dot w-3 h-3 rounded-full bg-white/40';
    });
  }

  showSlide(0);

  dots.forEach(d => {
    d.addEventListener('click', () => {
      current = +d.dataset.slide;
      showSlide(current);
    });
  });

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 6000);

  // AOS initialization (مرة واحدة)
  if (AOS) {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
      offset: 100,
    });
  }

  // GSAP animation
  if (gsap) {
    gsap.from('.slide h1, .slide h2, .slide p, .slide a', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2
    });
  }

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('h3');
    const plusIcon = item.querySelector('.plus');
    const minusIcon = item.querySelector('.minus');
    const answer = item.querySelector('.faq-answer');

    item.addEventListener('click', () => {
      const isOpen = !answer.classList.contains('hidden');
      // Close all
      faqItems.forEach(i => {
        i.querySelector('.faq-answer').classList.add('hidden');
        i.querySelector('.plus').classList.remove('hidden');
        i.querySelector('.minus').classList.add('hidden');
      });

      if(!isOpen){
        answer.classList.remove('hidden');
        plusIcon.classList.add('hidden');
        minusIcon.classList.remove('hidden');
      }
    });
  });

  // Mobile menu (اختياري)
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");
  if(menuBtn && mobileMenu && closeMenu){
    menuBtn.addEventListener("click", () => mobileMenu.classList.remove("translate-x-full"));
    closeMenu.addEventListener("click", () => mobileMenu.classList.add("translate-x-full"));

    document.addEventListener("mousedown", (e) => {
      if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.add("translate-x-full");
      }
    });
  }

  // HR dropdown mobile
  const hrBtn = document.getElementById("mobile-hr-btn");
  const hrMenu = document.getElementById("mobile-hr-menu");
  if(hrBtn && hrMenu){
    hrBtn.addEventListener("click", () => hrMenu.classList.toggle("hidden"));
  }
});




  document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const service = params.get('service');
  
  // Hide all service details
  document.querySelectorAll('.service-detail').forEach(el => {
    el.classList.add('hidden');
  });
  
  // Show the selected service
  if (service) {
    const serviceElement = document.getElementById(service);
    if (serviceElement) {
      serviceElement.classList.remove('hidden');
    }
  }
});