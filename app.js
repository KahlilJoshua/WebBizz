let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2000);
}

const ul = document.getElementById("ul");
document.getElementById("btn").onclick = function () {
  if (ul.style.display == "flex") {
    ul.style.display = "none";
  } else {
    ul.style.display = "flex";
  }
};
