export default function (req, res) {
    require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'alphadicingclubforms@gmail.com',
            pass: process.env.password,
        },
        secure: true,
    });
    
    //TODO: cambiar el to email
    const mailData = {
        from: 'alphadicingclubforms@gmail.com',
        to: 'kaxelvii@gmail.com',
        subject: `${req.body.diver} (age ${req.body.age}) wishes to join the club!`,
        text: `${req.body.message}`,
        html: `<div><p>${req.body.message}</p><br><div>Sent by: ${req.body.parentName}.<br>${req.body.phone} | ${req.body.email}</div></div>`
       }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info)
    })
       
    res.send('success')
    // res.status(200)
    // return res
  }