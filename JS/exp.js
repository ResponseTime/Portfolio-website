const express = require('express');
const exp = express();
const mail = require('nodemailer')
const port = process.env.PORT || 5000

let k = 0
exp.use(express.static(__dirname + '/public'));
exp.use(express.urlencoded({
    extended: true
  }))
exp.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})
exp.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const tra = mail.createTransport({
        service: 'gmail',
        auth: {
          user: 'aayush.bhattacharjee2002@gmail.com',
          pass: 'menl sgkk qlzr gxlx'
        }
      })
    let mailOptions = {
        from: 'aayush.bhattacharjee2002@gmail.com',
        to: 'aayush.bhattacharjee2002@gmail.com',
        subject: 'Message From portfolio',
        text: `Name: ${name}
                   Email: ${email}
                   Message: ${message} `
      };
      tra.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      })
    setTimeout(() => {
        res.sendFile(__dirname+'/index.html')
    }, 1000);
        
  })
exp.listen(port,()=>{
console.log('server started')
})