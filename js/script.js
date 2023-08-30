
const menuIcon = document.querySelector('.menu');
const listMenu = document.querySelector('.list-menu');

menuIcon.onclick = function() {
    console.log("clicked");
    listMenu.classList.add("list-menu2")
    console.log(listMenu)
};
