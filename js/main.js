import hamburgerMenu from "./hamburger_menu.js";
import carousel from "./carousel.js";

const pathname = window.location.pathname;

const d=document;

d.addEventListener('DOMContentLoaded', (e)=>{
  console.log('Se inició correctamente...');
  hamburgerMenu(".hamburger-btn", ".hamburger-menu-container");
  if(pathname == '/index.html'){
    carousel(".best-beaches");
  }
})