console.log("%cWelcome to my exercise for Front End Jr. at DOT :)", "background-color: #FFDAC1; color: black");
console.log("%cMade with ♥ by Cinthia P!", "background-color: #FFDAC1; color: black");

const gallery = document.getElementById('open-gallery');
const secondGallery = document.getElementById('open-second-gallery');
const thirdGallery = document.getElementById('open-third-gallery');
const fourthGallery = document.getElementById('open-fourth-gallery');

/* Bottom Gallery */
gallery.addEventListener('click', e => {
    e.preventDefault();

    const openWindow = document.getElementById('open-window');
    show(openWindow);
});

secondGallery.addEventListener('click', e => {
    e.preventDefault();

    const openSecondWindow = document.getElementById('open-sec-window');
    show(openSecondWindow);
});

thirdGallery.addEventListener('click', e => {
    e.preventDefault();

    const openThirdWindow = document.getElementById('open-th-window');
    show(openThirdWindow);
});

fourthGallery.addEventListener('click', e => {
    e.preventDefault();

    const openFourthWind = document.getElementById('open-fourth-window');
    show(openFourthWind);
});

function show(input){
    if(input.style.display === "none"){
        input.style.display = "block";
    } else {
        input.style.display = "none";
    }
}

