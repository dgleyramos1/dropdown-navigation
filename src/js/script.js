
//Variaveis
let features = document.getElementById("features")
let company = document.getElementById("company")
let dropdown_features = document.querySelector(".dropdown_features")
let dropdown_company = document.querySelector(".dropdown_company")
let arrowF = document.querySelector(".arrowF")
let arrowC = document.querySelector(".arrowC")

let menu_open = document.getElementById("btn_menu-open");
let menu_close = document.getElementById("btn_menu-close");
let nav = document.getElementById("nav");
let dropdown = document.getElementById("backdrop")


//Botão do dropdown
features.addEventListener('click', () => {
  dropdown_features.classList.toggle('dropdown_close');
  arrowF.classList.toggle("arrow_features")
})
company.addEventListener('click', () => {
  dropdown_company.classList.toggle('dropdown_close');
  arrowC.classList.toggle("arrow_company")
})


menu_open.addEventListener('click', () => {
  nav.classList.toggle("menu_close")
  dropdown.classList.toggle("open-dropdown")
})
menu_close.addEventListener('click', () => {
  nav.classList.toggle("menu_close")
  dropdown.classList.toggle("open-dropdown")
})