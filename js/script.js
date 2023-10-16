// Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
    hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('muncul');
});


const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");


let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let counter1 = 0;
let counter2 = 0;

let interval1;
let interval2;
setInterval(() => {
    if(counter1 == 90) {
        clearInterval();
    } else {
        counter1 += 1;
        number1.innerHTML = counter1 + "%";
    }
}, 20);
setInterval(() => {
    if(counter2 == 85) {
        clearInterval();
    } else {
        counter2 += 1;
        number2.innerHTML = counter2 + "%";
    }
}, 30);




const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");

div1.addEventListener("click", function (){
    box1.style.display = "block"; 
    box2.style.display = "none";
    div1.classList.add("activate");
    div2.classList.remove("activate");
    counter1 = 1;
    if (!interval1) {
        interval1 = setInterval(() => {
            if(counter1 == 90) {
                clearInterval(interval1);
            } else {
                counter1 += 1;
                number1.innerHTML = counter1 + "%";
            }
        }, 20);
    }
});

div2.addEventListener("click", function () {
    box1.style.display = "none"; 
    box2.style.display = "block";
    div1.classList.remove("activate");
    div2.classList.add("activate");
    counter2 = 1;
    if (!interval2) {
        interval2 = setInterval(() => {
            if(counter2 == 85) {
                clearInterval(interval2);
            } else {
                counter2 += 1;
                number2.innerHTML = counter2 + "%";
            }
        }, 15);
    }
})

window.onscroll = function() {
    const header = document.querySelector('#about');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');


    if(window.pageYOffset > fixedNav) {
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}



