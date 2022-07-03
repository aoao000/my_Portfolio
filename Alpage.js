let morepage = document.querySelector('.more');
        let close = document.querySelector('.XX');
        let antherpage = document.getElementById('anthpage');
        close.onclick = function(){
          morepage.classList.remove("active")
          antherpage.style.display = "none";
        }
        morepage.onclick = function(){
          morepage.classList.toggle("active")
          antherpage.style.display = "block";
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