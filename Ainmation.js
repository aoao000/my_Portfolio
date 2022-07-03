let chan = document.querySelector('.chan');
let comics = document.querySelector('.comics');
let cha = document.getElementById('change');
chan.onclick = function(){
    comics.classList.toggle('active');
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