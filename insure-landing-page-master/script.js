const toggleMenu = document.querySelector(".toggle-container");
const navList = document.querySelector(".nav-list");

toggleMenu.addEventListener("click", function(){
    navList.classList.toggle("show-links");
})