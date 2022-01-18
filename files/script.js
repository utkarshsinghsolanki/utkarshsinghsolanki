
document.querySelector('.menu-btn').addEventListener("click", () => {
    document.querySelector('.nav').classList.toggle('nav-go')
    let btn = document.querySelector('.menu-btn')
    if (document.querySelector('.nav').classList.contains('nav-go')) {
        btn.style.transform = 'rotate(0deg)'
    }
    else {
        btn.style.transform = 'rotate(180deg)'
    }
})

let loader = document.querySelector('.preloader')
function preloader() {
    loader.style.display = "none";
}