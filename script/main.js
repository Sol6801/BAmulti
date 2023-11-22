const {log}= console;
const nav = document.getElementById("nav");
const btnBars = document.getElementById("fa-bars");

function depliegueNav(){
    nav.classList.toggle("nav-visible");
};

function cerrarNav (e){
    if(e.target.classList.contains("nav-item")){
        depliegueNav();
    };
};

const scrollButton = document.getElementById("scrollButton");
scrollButton.addEventListener("click", () => {
window.scrollTo({
        top: 0, 
        behavior: "smooth" 
    });
});


function iniciar (){
    btnBars.addEventListener("click", depliegueNav);
    nav.addEventListener("click", cerrarNav);
}

iniciar();

document.querySelector('.form').addEventListener('submit',e => {
    e.preventDefault()
  });