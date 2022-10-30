const express = require('express');

const app = express();
const port = 5500;

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/html/contact.html");
});

app.use("/styles", express.static(__dirname + '/styles'));
app.use("/scripts", express.static(__dirname + '/scripts'));
app.use("/images", express.static(__dirname + '/images'));

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}!`));

app.use(express.json());

app.post('/sendemail', function (req, res) {
    let sendTo = req.body.sendTo;
    let subject = req.body.subject;
    let message = req.body.message;
    sendEmail(sendTo, subject, message);
    let response = { "status": "sucesso" };
    res.json(response);
});

const nodemailer = require('nodemailer');
const user = "db75b540d991be";
const pass = "0854358c94c140";

function sendEmail(sendTo, subject, message) {
    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: { user, pass }
    });

    const content = {
        from: sendTo,
        to: "faleconosco@futcards.com.br",
        subject: subject,
        text: message,
    };

    transporter.sendMail(content, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log(info)
        }
    });
}
