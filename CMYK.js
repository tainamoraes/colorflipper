const colors = ["cyan", "magenta", "yellow", "black"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    const randomNumber = getRamdomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    
});

function getRamdomNumber(){
    return Math.floor(Math.random()*colors.length);
}