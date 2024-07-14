const submit = document.querySelector("button[type=submit]")
const pass = document.querySelector("#password");
const confirmPass = document.querySelector("#confirm_password");
const passAlert = document.querySelector("#pass-not");

submit.addEventListener("click", event => {
    if(pass.value != confirmPass.value) {
        passAlert.style.display = "block";
    }
});