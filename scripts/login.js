const login = document.getElementById("login");
const password = document.getElementById("password");
const loginSection = document.getElementById("loginSection");
const response = document.createElement("p");

function tryLogin(event) {
    event.preventDefault();
    response.id = "response";
    if (validateLogin()) {
        if (validatePassword()) {
            document.location = 'home.html';
        } else {
            response.innerHTML = "Senha inválida.";
        }
    } else {
        response.innerHTML = "Login inválido.";
    }
    loginSection.appendChild(response);
}

function validateLogin() {
    return login.value ? true : false;
}

function validatePassword() {
    return password.value ? true : false;
}