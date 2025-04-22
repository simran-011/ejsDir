
let btns = document.querySelectorAll("button");
for(btn of btns ) {
    btn.addEventListener("click",()=> {
        console.log("button was clicked")
        btn.style.backgroundColor = "blue";
        btn.style.color = "white";
    })
}