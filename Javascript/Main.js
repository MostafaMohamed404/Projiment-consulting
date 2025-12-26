window.addEventListener('DOMContentLoaded', () => {
  // ===== Carousel =====
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let current = 0;

  function showSlide(i) {
    slides.forEach((s, idx) => s.style.opacity = idx === i ? '1' : '0');
    dots.forEach((d, idx) => {
      d.className = idx === i ? 'dot w-3 h-3 rounded-full bg-white' : 'dot w-3 h-3 rounded-full bg-white/40';
    });
  }

  if(slides.length > 0 && dots.length > 0){
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
  }

  // ===== AOS Initialization =====
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
      offset: 100,
    });
  }

  // ===== FAQ Accordion =====
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

  // ===== Mobile Navbar =====
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

  // ===== HR Dropdown Mobile =====
  const hrBtn = document.getElementById("mobile-hr-btn");
  const hrMenu = document.getElementById("mobile-hr-menu");

  if(hrBtn && hrMenu){
    hrBtn.addEventListener("click", () => {
      hrMenu.classList.toggle("hidden");
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);

  const serviceGroups = [
    { param: "hr", className: ".hr-service" },
    { param: "ai", className: ".ai-service" },
    { param: "accounting", className: ".accounting-service" },
    { param: "financial", className: ".financial-service" }
  ];

  serviceGroups.forEach(group => {
    const value = params.get(group.param);

    // اخفي كل السيكشنات في الجروب
    document.querySelectorAll(group.className).forEach(section => {
      section.classList.add("hidden");
    });

    // اظهر السيكشن المطلوب
    if (value) {
      const activeSection = document.getElementById(value);
      if (activeSection) {
        activeSection.classList.remove("hidden");
      }
    }
  });

});







  // Clients Swiper Initialization
  const swiper = new Swiper(".clientsSwiper", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    breakpoints: {
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });


   const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      // سرعة العد
      const increment = target / 200;

      if(count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };

    // اتأكد العد يحصل لما العنصر يظهر بالـ viewport
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          updateCount();
          observer.unobserve(counter);
        }
      });
    }, {threshold: 0.5});

    observer.observe(counter);
  });

