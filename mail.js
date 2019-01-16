const express = require('express');
const app = express();
const querystring = require('querystring');
const nodemailer = require('nodemailer');
// const mysql = require('mysql');


app.get('/mail', (req, res) => {

	/*const con = mysql.createConnection({
		host: "localhost",
		user: "yourusername",
		password: "yourpassword"
	});

	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
		con.query(sql, function (err, result) {
			if (err) throw err;
			console.log("Result: " + result);
		});

		const postName = post.name;
		const postEmail = post.email;
		const postPhone = post.phone;
		const postService = post.service;
		const postMessage = post.message;

		const sql = "INSERT INTO customers (name, email, phone, service, message) VALUES (postName, postEmail, postPhone, postService, postMessage)";
		con.query(sql, function (err, result) {
			if (err) throw err;
			console.log("1 record inserted, ID: " + result.insertId);
		});
		
	});*/

	const transporter = nodemailer.createTransport({
		host: 'mail.lcn.com',
		port: 465,
		secure: true,
		auth: {
			user: 'jordan@lime-house-studio.co.uk',
			pass: 'Arn1eMaxRocky135@'
		}
	});

	const mailOptions = {
		from: 'jordan@lime-house-studio.co.uk',
		to: 'jordanabryan88@gmail.com',
		subject: 'Sending Email using Node.js',
		text: 'That was easy!'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			res.send(error);
			console.log(error);
		} else {
			res.send('Email sent: ' + info.response);
			console.log('Email sent: ' + info.response);
		}
	});

});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});





