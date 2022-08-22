// Your code goes here
document.addEventListener("DOMContentLoaded", function(){
    console.log("The Dom has loaded");
    modifyText()
});

function modifyText(){
    const text = document.getElementById("text")
    text.textContent = "This is really cool!"
}