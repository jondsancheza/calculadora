//Asignación de variables
let botones = document.querySelector(".botones");
let btn = document.querySelectorAll("span");
let resultado = document.getElementById("resultado");
let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");


//Realización de operaciones con base en el boton que se pulse, se calcula con eval, y lo puesto en pantalla se va concatenando
for (let i = 0; i < btn.length; i++) {
    
  btn[i].addEventListener("click", function () { 
    if (this.innerHTML == "=") {
      resultado.innerHTML = eval(resultado.innerHTML);
    } else {
      if (this.innerHTML == "C") {
        resultado.innerHTML = "";
      } else {
        resultado.innerHTML += this.innerHTML;
      }
    }
  });
  
}

//Asigna el modo dark y cambia el valor del local storage a verdadero o falso 
toggleBtn.onclick = function () {
  body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
};

//Comprueba el valor del local storage y mantiene el valor aunque se recargue la pagina
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}
