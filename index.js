const nodemailer = require('nodemailer');
// const express = require('express')
// const app = express()
// const port =  3000
// require("dotenv").config()
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ankur19952709@gmail.com',
        pass: 'Izkxntpjcnbvtnel'
    }
});
  
let mailDetails = {
    from: 'ankur19952709@gmail.com',
    to: 'aadarsh21@navgurukul.org',
    subject: 'Test mail',
    text: 'HI everyone I m  ankur from up'
};
  
transporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log('Email sent successfully');
    }
});


// app.listen(port,()=>{
//     console.log(`Server is on :${port}`)
// })