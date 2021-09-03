

const textarea = document.querySelector("textarea");
const submit = document.getElementById("submit");
const notePlace = document.getElementById("note-place");
const title = document.getElementById("title");

const clear = document.getElementById("clear");

clear.onclick = function() {
    clear.style.visibility = "hidden"
    notePlace.innerHTML = "";
}
submit.onclick = function() {
    clear.style.visibility = "visible";
    let div = document.createElement("div");
    div.classList.add("note-background");
    let p = document.createElement("p");
    
    p.classList.add("note");
    p.textContent = textarea.value;
    let close = document.createElement("button");
    close.textContent = 'X'
    close.classList.add("close");

    let realTitle = document.createElement("h2");
    realTitle.style.textAlign = "center";
    realTitle.innerHTML = title.value;
    

    div.appendChild(close)
    div.appendChild(realTitle);
    div.appendChild(p);

    
      close.addEventListener("click", function() {
        console.log(close.parentElement)
        close.parentElement.remove()
    })

    notePlace.appendChild(div);


}