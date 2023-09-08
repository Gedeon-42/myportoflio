
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

// function to validate form

function validateForm(){
    let validate = document.forms['myForm']['myName'].value
    if (validate == "") {
        alert("Name must be filled out");
        return false;
      }
}


function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "umwizerwagedeon49@gmail.com",
        Password : "59E54D0C616EA64FC6F0508C8417CFC7D2EF",
        To : 'umwizerwagedeon@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New message from contact",
        Body : "And this is the body"
    }).then(
      message => alert("message was sent successfully")
    );
}