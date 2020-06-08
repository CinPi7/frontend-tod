/* Second Slide Galley */
let slideIndex = 1;
showSecSlides(slideIndex);

function nextSlide(n) {
    showSecSlides(slideIndex += n);
}
function currentSlide(n) {
    showSecSlides(slideIndex = n);
}
  
function showSecSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dotz");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

