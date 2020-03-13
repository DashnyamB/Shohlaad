const menuOpenButton = document.getElementById("menu-open-icon");
const menuExitButton = document.getElementById("menu-exit-icon");
const slideMenu = document.getElementById("menu-slide");

//Дэлгэцтэй ажиллах функц
var screenControl = (function() {
  var menuToggle = function() {
    menuOpenButton.addEventListener("click", function() {
      slideMenu.style.top = "0vh";
    });
    menuExitButton.addEventListener("click", function() {
      slideMenu.style.top = "-100vh";
    });
  };
  return {
    toggleMenu: menuToggle()
  };
})();
