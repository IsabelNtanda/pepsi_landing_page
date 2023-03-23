function imgSlider(anything){
  document.querySelector('.pepsi').src = anything
  }
function channgeBgColor(color){
const sec = document.querySelector(".sec")
sec.style.background = color
}

function menuToggle(){
const menu = document.querySelector('#menu-icon')
const navbar = document.querySelector('.navbar')
menu.classList.toggle('bx-x')
navbar.classList.toggle('active')
}

// window.onscroll = () => {
 //menu.classList.remove('bx-x')
// navbar.classList.remove('active')
 // }