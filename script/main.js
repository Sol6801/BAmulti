const {log}= console;
const nav = document.getElementById("nav");
const btnBars = document.getElementById("fa-bars");

//barra de navegacion fa-bars
function depliegueNav(){
    nav.classList.toggle("nav-visible");
};

function cerrarNav (e){
    if(e.target.classList.contains("nav-item")){
        depliegueNav();
    };
};

//scroll a la parte superior de la pagina
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

//validez del formulario

document.querySelector('.form').addEventListener('submit',e => {
    e.preventDefault()
  });

