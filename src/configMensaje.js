const nodemailer = require('nodemailer');
module.exports = (contact) => {
    console.log('configmensaje form', contact);
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        service: 'gmail',
        auth: {
            user: 'ingrijrm94@gmail.com', // Cambialo por tu email
            pass: 'fxui skxh stah pwei' // Cambialo por tu password
        }
    });

    const mailOptions = {
        from: `"${contact.name} 🍂 " <${contact.correo}>`,
        to: 'ingrijrm94@gmail.com', // Cambia esta parte por el destinatario
        subject: contact.subject,
        html: `
    <strong>Nombre:</strong> ${contact.name} <br/>
    <strong>E-mail:</strong> ${contact.correo}  <br/>
    <strong>Mensaje:</strong> ${contact.subject}
    `
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log('confmensaje err', err);
        else
            console.log('confmensaje info', info);
    });
}