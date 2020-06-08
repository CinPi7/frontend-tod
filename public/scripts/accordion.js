console.log("%cWelcome to my work for Front End at DOT :)", "background-color: #FFDAC1; color: black");
console.log("%cMade with ♥ by Cinpis!", "background-color: #FFDAC1; color: black");

let accordion = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let topBorderBox = this.nextElementSibling;
    if (topBorderBox.style.display === "block") {
        topBorderBox.style.display = "none";
    } else {
        topBorderBox.style.display = "block";
    }
  });
} 

