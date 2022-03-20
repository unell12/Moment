const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")
const fgme = document.querySelector("#forgetme")

const HIDDEN_CLASSNAME = "hidden";
const UN = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem("username",`${username}`)
    greeting.innerText = `Welcome, ${localStorage.getItem("username")}!`
    greeting.classList.remove(HIDDEN_CLASSNAME)
    fgme.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem("username")

if(!savedUsername){
    loginForm.addEventListener("submit", onLoginSubmit)
    fgme.classList.add(HIDDEN_CLASSNAME)
    fgme.addEventListener("click", () => {
        localStorage.removeItem(UN)
        window.location.reload()
    })
}else{
    fgme.classList.remove(HIDDEN_CLASSNAME)
    fgme.addEventListener("click", () => {
        localStorage.removeItem(UN)
        window.location.reload()
    })
    loginForm.classList.add(HIDDEN_CLASSNAME)
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `Hi, ${localStorage.getItem(UN)}`
}