const name1 = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const contact = document.getElementById("contact");
const response = document.createElement("p");

function sendMessage(event) {
  event.preventDefault();
  response.id = "response";

  if (validateMessage()) {
    if (validateSubject()) {
      if (validateName()) {
        if (validateEmail(email.value) && validateEmailLenght(email)) {
          let payload = {
            "sendTo": email.value,
            "subject": subject.value,
            "message": message.value
          };
          fetch("/sendemail", {
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(payload)
          })
            .then(function (res) {
              return res.json();
            })
            .then(function (data) {
              JSON.stringify(data);
            });
          responseMessage();
        } else {
          response.innerHTML = "Endereço de e-mail inválido.";
        }
      } else {
        response.innerHTML = "Insira o seu nome.";
      }
    } else {
      response.innerHTML = "Insira um assunto.";
    }
  } else {
    response.innerHTML = "Insira uma mensagem.";
  }
  contact.appendChild(response);
}

function validateMessage() {
  return message.value ? true : false;
}

function validateSubject() {
  return subject.value ? true : false;
}

function validateName() {
  return name1.value ? true : false;
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

function responseMessage() {
  return response.innerHTML = "Obrigado pelo contato, " + name1.value.split(" ")[0] + "!";
}