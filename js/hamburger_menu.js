export default function hamburgerMenu(hamburgerBtn, hamburgerMenu){
  const d = document;

  d.addEventListener("click", e=>{
    if (e.target.matches(hamburgerBtn) || e.target.matches(`${hamburgerBtn} *`)) {
      d.querySelector(hamburgerBtn).classList.toggle("hamburger-btn-activated");
      d.querySelector(hamburgerMenu).classList.toggle("hmc-is-active");
    }
    if(e.target.matches(`${hamburgerMenu} a`)){
      d.querySelector(hamburgerMenu).classList.remove("hmc-is-active");
      d.querySelector(hamburgerBtn).classList.remove("hamburger-btn-activated");
    }
  })

}