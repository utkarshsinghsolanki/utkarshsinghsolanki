let btn = document.querySelector('.menu-btn')
document.querySelector('.menu-btn').addEventListener("click", () => {
    document.querySelector('.nav').classList.toggle('nav-go')
    if (document.querySelector('.nav').classList.contains('nav-go')) {
        btn.style.transform = 'rotate(0deg)'

    }
    else {
        btn.style.transform = 'rotate(180deg)';
    }
})

let loader = document.querySelector('.preloader')
function preloader() {
    loader.style.display = "none";
}

function navgo(){
    document.querySelector('.nav').classList.add('nav-go')
    btn.style.transform = 'rotate(0deg)'
    
}
if($(window.screenY>200)){
    let header= document.querySelector('.header');
    header.style.display = "none";
}
