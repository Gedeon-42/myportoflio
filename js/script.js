
const menuIcon = document.querySelector('.menu');
const scrollTop = document.querySelector('.scrolltop')
menuIcon.onclick = function(){
    navbar = document.querySelector('.nav-bar')
    navbar.classList.toggle('active')

    if(navbar.classList.contains('active')){
        menuIcon.src = "./image/close1.jpg"
    }
    else{
        menuIcon.src ="./image/menu3.png"
    }
}

scrollTop.onclick =function(){
    window.scrollTo(0,0)
    console.log('aded')
}