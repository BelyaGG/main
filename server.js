var express = require('express'),
    path = require('path'),
    cors = require('cors'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

    var app = express();

    app.use(cors())
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    

    var port = 3000;

    app.post('/send-email', function (req, res) {
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'belyagomel@gmail.com',
              pass: 'Maks3542'
          }
      });
      
      let mailOptions = {
          from: '"TICKET" <belyagomel@gmail.com>', 
          to: req.body.to, 
          subject: 'Заказ', 
          text: 'Заказ принят!', 
          html: '<b>Спасибо за покупку!</b>' 
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
          });
    });
    app.listen(port, function(){
        console.log('Server is running at port: ',port);
    });