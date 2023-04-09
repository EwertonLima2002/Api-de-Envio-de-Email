const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
        user: "ewertonzorolima@gmail.com",
        pass: "clbjtypmyrxsdona"
    }
});

transporter.sendMail({
    from: "Ewerton Lima <ewertonzorolima@gmail.com>",
    to: "limaleite989@gmail.com",
    subject: "Oi sou o ewerton e vou ser um back end muitooo foda",
    text: "Olá sou o ewerton hoje dia 08 de abril estou aprendendo node js e é muitooooo foda"
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err)
})