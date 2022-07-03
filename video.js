function Onscrollfunction(){
    let bodyBottom = window.scrollY + window.innerHeight;
    let one = document.getElementById('one');
    let two = document.getElementById('two');
    let three = document.getElementById('three');
    let four = document.getElementById('four');
    let five = document.getElementById('five');
    let six = document.getElementById('six');
    let seven = document.getElementById('seven');
    (one.offsetTop + 1000 < bodyBottom) ? document.getElementById("one").classList.add("close") : document.getElementById("one").classList.remove("close");
    (two.offsetTop + 1000 < bodyBottom) ? document.getElementById("two").classList.add("close") : document.getElementById("two").classList.remove("close"); 
    (three.offsetTop + 300 < bodyBottom) ? document.getElementById("three").classList.add("open") : document.getElementById("three").classList.remove("open");
    (three.offsetTop + 1000 < bodyBottom) ? document.getElementById("three").classList.add("close") : document.getElementById("three").classList.remove("close");
    (four.offsetTop + 300 < bodyBottom) ? document.getElementById("four").classList.add("open") : document.getElementById("four").classList.remove("open");  
    (four.offsetTop + 1000 < bodyBottom) ? document.getElementById("four").classList.add("close") : document.getElementById("four").classList.remove("close");
    (five.offsetTop + 300 < bodyBottom) ? document.getElementById("five").classList.add("open") : document.getElementById("five").classList.remove("open");
    (five.offsetTop + 1000 < bodyBottom) ? document.getElementById("five").classList.add("close") : document.getElementById("five").classList.remove("close");
    (six.offsetTop + 300 < bodyBottom) ? document.getElementById("six").classList.add("open") : document.getElementById("six").classList.remove("open");
    (six.offsetTop + 1000 < bodyBottom) ? document.getElementById("six").classList.add("close") : document.getElementById("six").classList.remove("close"); 
    (seven.offsetTop + 300 < bodyBottom) ? document.getElementById("seven").classList.add("open") : document.getElementById("seven").classList.remove("open");
    (seven.offsetTop + 1000 < bodyBottom) ? document.getElementById("seven").classList.add("close") : document.getElementById("seven").classList.remove("close"); 

}
window.addEventListener('load', function () {
    let number = document.getElementById("number");
    let counter = 0;
    setInterval(() => {
        // if(counter == 65){
        //     clearInterval();
        // }
        if (counter == 100) {
            clearInterval();
            number.innerHTML = "Welcome!!";
            document.getElementById("skill").style.opacity = "0";
            
            if(number.innerHTML == "Welcome!!"){
              document.getElementById("OPEN").style.zIndex = "-10000";
            }
        }
        else {
            counter += 1;
            number.innerHTML = counter + "%";
        }
    }, 18)
})