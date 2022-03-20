const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const quoteremove = document.querySelector("#quote");
const column = document.querySelector(".column");
const columnlast = document.querySelector("#column3");
const main = document.querySelector(".main");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function  onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
paintGreetings(username);
} 

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`
    quoteremove.classList.remove(HIDDEN_CLASSNAME);
    column.classList.remove(HIDDEN_CLASSNAME);
    columnlast.classList.remove(HIDDEN_CLASSNAME);
    main.classList.remove(HIDDEN_CLASSNAME);

}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    paintGreetings(savedUsername);
}