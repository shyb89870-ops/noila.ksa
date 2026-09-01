// ظهور العناصر عند النزول

const items = document.querySelectorAll(
  ".card, .gallery-item, .section-title, .about-text"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.15
  }
);

items.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(40px)";
  item.style.transition = "1s ease";

  observer.observe(item);
});


// قائمة الجوال

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("mobile-nav");
});


// تغيير الهيدر عند النزول

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(20,18,14,.92)";
    header.style.color = "#fff";

    document.querySelectorAll("nav a").forEach(link => {
      link.style.color = "#fff";
    });

  } else {
    header.style.background = "rgba(231,221,202,.75)";

    document.querySelectorAll("nav a").forEach(link => {
      link.style.color = "#15130f";
    });
  }

});