let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    Update(count + 1);
   
}

function Update(newcount){
    count = newcount;
    countEl.textContent = count
    
}
function save() {
    saveEl.textContent += count + " - "
    Update(0);
}

