window.onresize = verificaWidth;

function verificaWidth() {
  let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if (width < 900) {
    if (!document.querySelector('.openbtn')) {
      closeNav();
      let btn = document.createElement("BUTTON");
      let menu = document.querySelector(".header");

      btn.innerHTML = "☰";
      btn.classList.add("openbtn");
      btn.addEventListener("click", openNav);
      menu.insertBefore(btn, menu.firstChild);

      let closebtn = document.createElement("BUTTON");
      let sidebar = document.querySelector(".sidebar");
      closebtn.innerHTML = "x";
      closebtn.classList.add("closebtn")
      closebtn.addEventListener("click", closeNav);
      sidebar.insertBefore(closebtn, sidebar.firstChild);
    }
  }
  else {
    if (document.querySelector('.openbtn')) {
      openNav();
      let openbtn = document.querySelector('.openbtn');
      let closebtn = document.querySelector('.closebtn')
      openbtn.parentNode.removeChild(openbtn);
      closebtn.parentNode.removeChild(closebtn);
    }
  }
}

function openNav() {
  document.querySelector(".sidebar").style.width = "250px";
  document.querySelector(".main").style.marginLeft = "250px";
}

function closeNav() {
  document.querySelector(".sidebar").style.width = "0";
  document.querySelector(".main").style.marginLeft = "0";
}
