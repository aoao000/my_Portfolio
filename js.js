let meuntoggle = document.querySelector('.toggle');
let menu = document.querySelector(".menu");
meuntoggle.onclick = function(){
    meuntoggle.classList.toggle('active')
    menu.classList.toggle('active')
}