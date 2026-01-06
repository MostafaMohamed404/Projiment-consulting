// ================= GLOBAL DOM READY =================
window.addEventListener("DOMContentLoaded", () => {
  // ===== AOS Initialization =====
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }

  // ===== FAQ Accordion =====
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const plusIcon = item.querySelector(".plus");
    const minusIcon = item.querySelector(".minus");
    const answer = item.querySelector(".faq-answer");

    item.addEventListener("click", () => {
      const isOpen = !answer.classList.contains("hidden");

      faqItems.forEach((i) => {
        i.querySelector(".faq-answer").classList.add("hidden");
        i.querySelector(".plus").classList.remove("hidden");
        i.querySelector(".minus").classList.add("hidden");
      });

      if (!isOpen) {
        answer.classList.remove("hidden");
        plusIcon.classList.add("hidden");
        minusIcon.classList.remove("hidden");
      }
    });
  });

  // ===== Mobile Navbar =====
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-full");
      mobileMenu.classList.add("translate-x-0");
    });
  }

  if (closeMenu && mobileMenu) {
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("translate-x-full");
    });
  }

  document.addEventListener("mousedown", (e) => {
    if (
      mobileMenu &&
      menuBtn &&
      !mobileMenu.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("translate-x-full");
    }
  });

  // ===== HR Dropdown Mobile =====
  const hrBtn = document.getElementById("mobile-hr-btn");
  const hrMenu = document.getElementById("mobile-hr-menu");

  if (hrBtn && hrMenu) {
    hrBtn.addEventListener("click", () => {
      hrMenu.classList.toggle("hidden");
    });
  }
});



window.addEventListener("load", () => {
  const slides = document.querySelectorAll(".slide");
  const slider = document.getElementById("slider");
  const lcpImage = document.getElementById("lcpImage");

  const tag = document.getElementById("slideTag");
  const title = document.getElementById("slideTitle");
  const text = document.getElementById("slideText");
  const btn = document.getElementById("slideBtn");

  if (!slides.length) return;

  const content = [
    {
      tag: "Business Partnerships",
      title: "Building Trusted<br />Business Partnerships",
      text:
        "We support organizations in forming strong partnerships and long-term collaborations that create real value.",
      link: "./pages/contact.html",
    },
    {
      tag: "Advisory Collaboration",
      title: "Working Closely<br />With Leadership Teams",
      text:
        "Our consultants collaborate side by side with decision-makers to align goals, strategy, and execution.",
      link: "./pages/contact.html",
    },
    {
      tag: "Executive Consulting",
      title: "Aligning People,<br />Strategy & Growth",
      text:
        "We help executive teams strengthen cooperation, accelerate growth, and build resilient organizations.",
      link: "./pages/contact.html",
    },
  ];

  let current = 0;

  // show slider + hide LCP image
  slider.style.opacity = "1";
  lcpImage.style.opacity = "0";

  function updateContent(i) {
    tag.textContent = content[i].tag;

    title.style.opacity = "0";
    text.style.opacity = "0";

    setTimeout(() => {
      title.innerHTML = content[i].title;
      text.textContent = content[i].text;
      btn.href = content[i].link;

      title.style.opacity = "1";
      text.style.opacity = "1";
    }, 200);
  }

  updateContent(0);

  setInterval(() => {
    const next = (current + 1) % slides.length;

    // 👈 اعرض الصورة الجديدة الأول
    slides[next].style.opacity = "1";

    // 👈 وبعدها اخفي القديمة
    setTimeout(() => {
      slides[current].style.opacity = "0";
      current = next;
      updateContent(current);
    }, 300);

  }, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const serviceGroups = [
    { param: "hr", className: ".hr-service" },
    { param: "ai", className: ".ai-service" },
    { param: "accounting", className: ".accounting-service" },
    { param: "financial", className: ".financial-service" },
  ];

  serviceGroups.forEach((group) => {
    const value = params.get(group.param);

    // اخفي كل السيكشنات في الجروب
    document.querySelectorAll(group.className).forEach((section) => {
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

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    // سرعة العد
    const increment = target / 200;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };

  // اتأكد العد يحصل لما العنصر يظهر بالـ viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCount();
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(counter);
});


 

 



document.addEventListener("DOMContentLoaded", function() {
  emailjs.init("UBe2G3JQms6LOgA_p");

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_5j497td",
      "template_4cvokhc",
      this
    ).then(
      function () {
        alert("✅ Message sent successfully!");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        console.error("EmailJS Error:", error);
        alert("❌ Failed to send message. Check console.");
      }
    );
  });
});