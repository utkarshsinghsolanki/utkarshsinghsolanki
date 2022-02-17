console.log('Magic Notes');
let text;
let addbtn = document.querySelector('.add-btn');
let notediv = document.querySelector('.notes-container');
let note;
let noteobj ;
let html;
addbtn.addEventListener('click', function addnote(){
    text = document.getElementById('note').value;
    note = localStorage.getItem('notes');
    console.log(note);
    if(note == null ){
        noteobj = [];
    }
    else{
        noteobj = JSON.parse(note);
    }
    noteobj.push(text);
    localStorage.setItem('notes', JSON.stringify(noteobj));
    document.getElementById('note').value = '';
    console.log('clickes');
    console.log(note);
    showNote();
});
function deleteNote(index){
    note = localStorage.getItem('notes');
    if (note == null) {
        noteobj = [];
      } else {
        noteobj = JSON.parse(note);
    }
    noteobj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(noteobj));
    showNote();
}
showNote();
function showNote(){
    note = localStorage.getItem('notes');
    if (note == null) {
        noteobj = [];
      } else {
        noteobj = JSON.parse(note);
    }
    html = '';
    noteobj.forEach(function(element,index){
        html += `<div class="notes">
                        <h3>Note ${index + 1}</h3>
                        <br>
                        <p>${element}</p> 
                        <br><br>
                        <button onclick="deleteNote()">Delete Note</button>
                    </div>`
    });
    if(noteobj.length ==0){
        notediv.innerText =  `Nothing to display here.`
    }
    else{
        notediv.innerHTML = html;
    }
}










// note.innerHTML = `<h3>Note ${noteLength}</h3> <br> <p>${text}</p> <br> <br> ${delbtndisplay}`;
// notediv.appendChild(note);
// if(text==0){
//     alert('Cannot create empty note');
//     notediv.removeChild(note)
//     noteLength -= 1;
// }
// document.getElementById('note').value = '';
// noteLength += 1;
// // delbtn = document.('del-btn');
// console.log(delbtn);
// delbtn = delbtn;
// delbtn.addEventListener('click', function() {
//     alert('hello');
//     notediv.removeChild(document.querySelector('.div'));
// })