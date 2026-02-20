document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  const ctaButtons = document.querySelectorAll('a[href^="#"]');
  ctaButtons.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
  ctaButtons.forEach((button) => {
    if (button.textContent.trim() === "View Work") {
      button.addEventListener("click", function () {
        const projectsSection = document.querySelector("#projects");
        if (projectsSection) {
          const offsetTop = projectsSection.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      });
    } else if (button.textContent.trim() === "Contact Me") {
      button.addEventListener("click", function () {
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
          const offsetTop = contactSection.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      });
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("#contact form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector("textarea").value;
    if (name && email && message) {
      alert("Thank you for your message! I'll get back to you soon.");
      this.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
});
// <!-- Initialize Swiper -->

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
    },
  });
});

/* MOBILE MENU TOGGLE */
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

/* SCROLL SHADOW EFFECT */
window.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const openBtn = document.getElementById("openConsultationModal");

const modal = document.getElementById("consultationModal");

const closeBtn = document.getElementById("closeConsultationModal");

// OPEN
openBtn.onclick = () => {
  modal.style.display = "flex";
};

// CLOSE BUTTON
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// OUTSIDE CLICK CLOSE
window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
