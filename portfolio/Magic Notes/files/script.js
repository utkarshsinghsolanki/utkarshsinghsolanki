console.log('Magic Notes');
let text;
let addbtn = document.querySelector('.add-btn');
let notediv = document.querySelector('.notes-container');
let note;
let noteobj ;
let html;
let heading;
let noteheadobj;
addbtn.addEventListener('click', function addnote(){
    heading = document.getElementById('note-heading').value;
    text = document.getElementById('note').value;
    noteheading = localStorage.getItem('heading')
    note = localStorage.getItem('notes');
    console.log(note);
    if(note == null){
        noteobj = [];
    }
    else{
        noteobj = JSON.parse(note);
    }
    if(noteheading == null){
        noteheadobj = [];
    }
    else{
        noteheadobj = JSON.parse(noteheading);
    }
    noteheadobj.push(heading);
    noteobj.push(text);
    if(text.length == 0){
        noteobj.pop();
        alert('Cannot Create Empty Note');
    }
    if(heading.length == 0){
        noteheadobj.pop();
        alert('Cannot Create Note Without Heading');
    }
    localStorage.setItem('heading', JSON.stringify(noteheadobj));
    localStorage.setItem('notes', JSON.stringify(noteobj));
    document.getElementById('note').value = '';
    document.getElementById('note-heading').value = '';
    showNote();
});
showNote();
function showNote(){
    noteheading = localStorage.getItem('heading');
    note = localStorage.getItem('notes');
    if (note == null) {
        noteobj = [];
      } else {
        noteobj = JSON.parse(note);
    }
    if(noteheading == null){
        noteheadobj = [];
    }
    else{
        noteheadobj = JSON.parse(noteheading);
    }
    html = '';
    noteobj.forEach(function(element,index){
        html += `<div class="notes">
                        <h3>${noteheadobj[index].toUpperCase()}</h3>
                        <br>
                        <p>${element}</p> 
                        <br><br>
                        <button onclick="deleteNote(this.id)" id="${index}" >Delete Note</button>
                    </div>`
                });
    if(noteobj.length ==0){
        notediv.innerText =  `Nothing to display here. Click on Add Note to create one.`
    }
    else{
        notediv.innerHTML = html;
    }
}
function deleteNote(index){
   let note = localStorage.getItem('notes');
   if (note==null){
       noteobj = [];
   }
   else{
       noteobj= JSON.parse(note);
    }
    if(noteheading == null){
        noteheadobj = [];
    }
    else{
        noteheadobj = JSON.parse(noteheading);
    }
    noteheadobj.splice(index, 1);
    noteobj.splice(index, 1);
    localStorage.setItem('heading', JSON.stringify(noteheadobj));
    localStorage.setItem('notes', JSON.stringify(noteobj));
    showNote();
}

let search = document.querySelector('.search-area');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('notes');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        let cardHead = element.getElementsByTagName("h3")[0].innerText.toLowerCase();
        if((cardTxt.includes(inputVal)) || cardHead.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})
