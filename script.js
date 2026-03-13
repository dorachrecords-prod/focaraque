/* SCROLL REVEAL */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{threshold:0.2});

sections.forEach(section =>{

section.classList.add("hidden");

observer.observe(section);

});



/* NAVBAR SCROLL EFFECT */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

header.style.background = "rgba(0,0,0,0.85)";
header.style.backdropFilter = "blur(12px)";

}

else{

header.style.background = "rgba(0,0,0,0.4)";
header.style.backdropFilter = "blur(10px)";

}

});



/* SMOOTH SCROLL NAV LINKS */

const links = document.querySelectorAll("nav a");

links.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth"

});

});

});