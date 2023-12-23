// js menu and cross bar

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

//js for video slider navigation start

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

//js for video slider navigation ends

// js for scroll animation start

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: "2500",
  delay: "400",
});

ScrollReveal().reveal(".main-title", { delay: 500, origin: "top" });
ScrollReveal().reveal(".sec-01 .image, .info", {
  delay: 500,
  origin: "bottom",
});
ScrollReveal().reveal(".text-box", { delay: 600, origin: "right" });
ScrollReveal().reveal(".sec-02 .image", {
  delay: 400,
  origin: "top",
  interval: 100,
});
ScrollReveal().reveal(".text-box", { delay: 600, origin: "top" });

// js for scroll animation ends
