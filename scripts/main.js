const email = document.getElementById("email");
const message = document.getElementById("message");
const faleConosco = document.getElementById("faleConosco");
const response = document.createElement("p");

function enviarMensagem(event) {
  event.preventDefault();
  response.id = "response";
  if (validarMensagem()) {
    if (validarEmail(email.value) && validarEmailComprimento(email)) {
      response.innerHTML =
        "Obrigado pelo contato, " +
        email.value.substring(0, email.value.indexOf("@")) +
        "!";
    } else {
      response.innerHTML = "Erro no envio: Endereço de e-mail inválido!";
    }
  } else {
    response.innerHTML = "Erro no envio: Insira uma mensagem!";
  }
  faleConosco.appendChild(response);
}

function validarMensagem() {
  return message.value ? true : false;
}

function validarEmail(email) {
  const re = /^[A-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;
  return re.test(email);
}

function validarEmailComprimento(email) {
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

// function validarMensagem() {
//   if (message.value) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function validarEmailComprimento(email) {
//   const user = email.value.substring(0, email.value.indexOf("@"));
//   const domain = email.value.substring(
//     email.value.indexOf("@") + 1,
//     email.value.indexOf(".")
//   );
//   if (
//     user.length >= 1 &&
//     user.length <= 32 &&
//     domain.length >= 1 &&
//     domain.length <= 16
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }