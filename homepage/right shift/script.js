let a = document.querySelector(".scroll");
let b = document.querySelector(".scroll .list");
let c = document.querySelector(".scroll .bottom");
let nextA = document.getElementById("next");
let nextB = document.getElementById("prev");


nextA.onclick = function(){
    showSlider('next');
}

function showSlider(type){
    let liist = document.querySelectorAll(".scroll .list .item");
    let boto = document.querySelectorAll(".scroll .bottom .item");

    if (type == 'next'){
        b.appendChild(liist[0]);
        c.appendChild(boto[0]);
        a.classList.add("next");
    }
}

