let btn = document.querySelector(".menu-btn");
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("nav-go");
  if (document.querySelector(".nav").classList.contains("nav-go")) {
    btn.style.transform = "rotate(0deg)";
  } else {
    btn.style.transform = "rotate(180deg)";
  }
});

let loader = document.querySelector(".preloader");
function preloader() {
  loader.style.display = "none";
}

function navgo() {
  document.querySelector(".nav").classList.add("nav-go");
  btn.style.transform = "rotate(0deg)";
}

document.getElementById("searchBar").addEventListener("input", () => {
  let value = document.getElementById("searchBar").value.toLowerCase();
  let card = document.getElementsByClassName("project-content");
  Array.from(card).forEach((element) => {
    if (element.innerText.toLowerCase().includes(value)){
      element.style.display = "block";
    } else{
      element.style.display = "none";
    }
  });
});