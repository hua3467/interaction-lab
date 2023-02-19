const mission = "The School of Architecture's mission is to educate architects who will imagine and shape the future through their designs.";
const diversityStatement = "The School of Architecture is committed to fostering a diverse and inclusive community that values and respects all individuals.";
const values = "The School of Architecture values creativity, innovation, collaboration, and excellence.";
const vision = "The School of Architecture envisions a future where architecture is at the forefront of shaping a sustainable, equitable, and beautiful world.";
const goals = "The School of Architecture's goals include preparing students for successful careers in architecture, conducting cutting-edge research, and engaging with the broader community to advance the field.";

document.getElementById("mission").innerHTML = mission;
document.getElementById("diversity-statement").innerHTML = diversityStatement;
document.getElementById("values").innerHTML = values;
document.getElementById("vision").innerHTML = vision;
document.getElementById("goals").innerHTML = goals;

const slideshowImages = [
  "https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/38132/pexels-photo-38132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Initialize slideshow
showSlides(slideIndex);
