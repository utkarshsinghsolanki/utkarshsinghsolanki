var btn = document.querySelector(".menu-btn")
document.querySelector('.menu-btn').addEventListener("click", () => {
    document.querySelector('.nav').classList.toggle('nav-go')
    if (document.querySelector('.nav').classList.contains('nav-go')) {
        btn.style.transform = 'rotate(0deg)'
    }
    else {
        btn.style.transform = 'rotate(180deg)'
    }
})
function navgo(){
    document.querySelector('.nav').classList.add('nav-go')
    btn.style.transform = 'rotate(0deg)'
    
}

function requried(){
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let date = document.getElementById('date').value;
    if((!name==0) && (!phone==0) && (!date==0)){
        alert("Reservation Recived");
    }
    if(name==0){
        alert("Please Fill Up Your Name.");
    }
    if(phone==0){
        alert("Please Fill Up Your Phone No.");
    }
    if(date==0){
        alert("Please Fill Up Date.");
    }
}