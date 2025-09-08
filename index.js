AOS.init();

const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // Toggle menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Scroll change navbar
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
  const actions = document.querySelector(".actions");
  const images = document.querySelectorAll(".actions .oops");
  const dotsContainer = document.querySelector(".dots");

  // create dots dynamically
  images.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dots span");

  actions.addEventListener("scroll", () => {
    let index = Math.round(actions.scrollLeft / (images[0].clientWidth + 20));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const images = document.querySelectorAll(".slides img");
  let index = 0;

  setInterval(() => {
    index = (index + 1) % images.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }, 10000); // 10 seconds
});
let slideIndex = [1,1,1,1,1]; // one entry per gallery
let slideId = ["slideY1","slideY2","slideY3","slideY4"];

function openLightbox(gallery) {
  document.getElementById("lightbox" + gallery).style.display = "block";
}

function closeLightbox(gallery) {
  document.getElementById("lightbox" + gallery).style.display = "none";
}

function changeSlide(n, gallery) {
  showSlide(slideIndex[gallery] += n, gallery);
}

function setSlide(n, gallery) {
  showSlide(slideIndex[gallery] = n, gallery);
}

function showSlide(n, gallery) {
  let slides = document.getElementsByClassName(slideId[gallery-1]);
  if (n > slides.length) { slideIndex[gallery] = 1 }
  if (n < 1) { slideIndex[gallery] = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex[gallery]-1].style.display = "block";
}

// initialize each gallery
showSlide(1,1);
showSlide(1,2);
showSlide(1,3);
showSlide(1,4);


