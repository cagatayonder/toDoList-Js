//CLOSE BUTTON
// Take the list w/Tagname
let currentList = document.getElementsByTagName("LI");
//Create a loop for create span and close button
let i;
for (i = 0; i < currentList.length; i++) {
  let addSpan = document.createElement("SPAN");
  //multiplication sign ("\u00D7")
  let bttnClose = document.createTextNode("\u00D7");
  addSpan.className = "close";
  addSpan.appendChild(bttnClose);
  currentList[i].appendChild(addSpan);
}
//HIDE AFTER CLICK CLOSE
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    // Create func. w/onclick
    close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
// Add a "checked" symbol when clicking on a list item
let list = document.querySelector("#list");
list.addEventListener('click', function(clicked) {
  if (clicked.target.tagName === 'LI') {
    clicked.target.classList.toggle('checked');
  }
});
// Add new element to list

function newToDo() {
    let li = document.createElement("li");
    let newListEl = document.getElementById("task").value;
    let t = document.createTextNode(newListEl);
    li.appendChild(t);

    // code for replace whitespace with "" => newListEl.replace(/^\s+|\s+$/g, "")

    if (newListEl === '' || newListEl.trim().length == 0 ) 
    {
        $(".error").toast("show");
    } 
    else 
    {
        $(".success").toast("show");
        document.getElementById("list").appendChild(li);
    }
    
    let addSpan = document.createElement("SPAN");
  //multiplication sign ("\u00D7")
    let bttnClose = document.createTextNode("\u00D7");
    addSpan.className = "close";
    addSpan.appendChild(bttnClose);
    li.appendChild(addSpan);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  