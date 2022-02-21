// NavBar Start

// mood
let body1 = document.getElementById("bodyc");

let Nav1 = document.querySelector(".navbarSticky1");
let Nav2 = document.querySelector(".navbarSticky2");
// mood end

// NavBar Select
let Menu = document.querySelector(".menu");

let smode = document.querySelector(".smode");
let dmode = document.querySelector(".dmode");

let smode2 = document.querySelector(".smode2");
let dmode2 = document.querySelector(".dmode2");

let darkMood = document.querySelector("#darkMood");
// NavBar Select

dmode.addEventListener("click", modeDark);
function modeDark() {
  body1.classList.add("darkBodyc");
  body1.classList.remove("bodyc");
  Nav1.classList.add("darkNavBarSticky2");
  Nav2.classList.add("darkNavBarSticky2");
}
smode.addEventListener("click", modeWhite);
function modeWhite() {
  body1.classList.add("bodyc");
  body1.classList.remove("darkBodyc");
  Nav1.classList.remove("darkNavBarSticky2");
  Nav2.classList.remove("darkNavBarSticky2");
}
dmode2.addEventListener("click", modeDark);
function modeDark() {
  body1.classList.add("darkBodyc");
  body1.classList.remove("bodyc");
  Nav1.classList.add("darkNavBarSticky2");
  Nav2.classList.add("darkNavBarSticky2");
}
smode2.addEventListener("click", modeWhite);
function modeWhite() {
  body1.classList.add("bodyc");
  body1.classList.remove("darkBodyc");
  Nav1.classList.remove("darkNavBarSticky2");
  Nav2.classList.remove("darkNavBarSticky2");
}
// navbar end
