const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
        user: "cocoatech@outlook.com",
        pass: "460820Ab@"
    }
});

transporter.sendMail({
    from: "Ewerton Lima <cocoatech@outlook.com>",
    to: "limaleite989@gmail.com",
    subject: "Oi sou o ewerton e vou ser um back end muitooo foda",
    text: "Olá sou o ewerton hoje dia 08 de abril estou aprendendo node js e é muitooooo foda"
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err)
})