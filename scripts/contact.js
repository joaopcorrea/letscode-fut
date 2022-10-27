const name1 = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const contact = document.getElementById("contact");
const response = document.createElement("p");

function sendMessage(event) {
  event.preventDefault();
  response.id = "response";

  if (validateMessage()) {
    if (validateName()) {
      if (validateEmail(email.value) && validateEmailLenght(email)) {
        response.innerHTML = "Obrigado pelo contato, " + name1.value.split(" ")[0] + "!";
      } else {
        response.innerHTML = "Erro no envio: Endereço de e-mail inválido!";
      }
    } else {
      response.innerHTML = "Erro no envio: Insira o seu nome!";
    }
  } else {
    response.innerHTML = "Erro no envio: Insira uma mensagem!";
  }
  contact.appendChild(response);
}

function validateName() {
  return name1.value ? true : false;
}

function validateMessage() {
  return message.value ? true : false;
}

function validateEmail(email) {
  const re = /^[A-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;
  return re.test(email);
}

function validateEmailLenght(email) {
  const user = email.value.substring(0, email.value.indexOf("@"));
  const domain = email.value.substring(
    email.value.indexOf("@") + 1,
    email.value.indexOf(".")
  );
  return user.length >= 1 &&
    user.length <= 32 &&
    domain.length >= 1 &&
    domain.length <= 16
    ? true
    : false;
}