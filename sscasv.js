// SSCASV JavaScript Document

// Slide Show Section
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Modal Section
var modal = document.getElementById("myModal"); // Get the modal
var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
span.onclick = function() { // When the user clicks on <span> (x), close the modal
  modal.style.display = "none";
}
window.onclick = function(event) { // When the user clicks anywhere outside of the modal, close it
  if (event.target == modal) {
	modal.style.display = "none";
  }
}

// Hamburger Menu Section (not in use)
function hamBurger(x) {
	x.classList.toggle("change");
}