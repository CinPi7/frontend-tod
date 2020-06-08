let slideIndex = 1;
showSlides(slideIndex);
showMainSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("slide-header");
      let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
          slideIndex = 1 
        }    
        if (n < 1) {
          slideIndex = slides.length 
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function plusS(n) {
    showMainSlides(slideIndex += n);
}
function currentS(n) {
    showMainlides(slideIndex = n);
}

function showMainSlides(n) {
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
    slides[slideIndex-1].style.display = "grid";
    dots[slideIndex-1].className += " active";
}