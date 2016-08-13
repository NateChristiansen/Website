var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var nodemailer = require('nodemailer');
var params = require('../private/emailinfo.json');
var projects = require('../private/projectinfo.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nathan Christiansen' });
});

router.post('/email', function(req, res){
	try{
		var sender = req.body;
		var transporter = nodemailer.createTransport('smtps://' + params.email + ':' + params.pass + '@smtp.gmail.com');
		var mailOptions = {
			from: '"' + sender.firstname + ' ' + sender.lastname + '" <' + sender.email + '>',
			to: 'natechristiansen42@gmail.com',
			subject: sender.firstname + ' ' + sender.lastname + ' Has Sent You A Message',
			text: sender.message + '\nContact:\nWork - ' + sender.workphone + '\nCell - ' + sender.cellphone + '\nEmail - ' + sender.email
		};
		transporter.sendMail(mailOptions, function(error, info){
			if (error){
				res.send('Failed to send.');
			}
			res.send('Sent.');
		});
	}
	catch(err){
		res.send(JSON.stringify(err.message));
	}
});

router.get('/projects', function(req, res, next) {
	res.send(projects);
});

module.exports = router;