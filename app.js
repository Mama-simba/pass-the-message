


// Grab form and add event Listener
    let form = document.querySelector("form");
    form.addEventListener("submit", showMessage);



//Display message or error message on sticky note
function showMessage (event){
    event.preventDefault();

    // Grab input message
    let inputValue = document.getElementById("input").value;
    let message = document.getElementById("message");
    let errorMessage = document.getElementById("errormessage");

    if (inputValue) {
        message.innerHTML = inputValue;
    } else {
        message.style.display = "none"
        errorMessage.innerHTML = "Please enter your message!";
    }
}