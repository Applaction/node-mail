var nodemailer = require('nodemailer');
var fs = require('fs');

var path = 'index.html';
fs.exists(path,function(isFind){
	if(isFind){
		var mailHtml = fs.readFileSync(path,{encoding:'utf8'});
		
		// create reusable transporter object using SMTP transport
		var transporter = nodemailer.createTransport({
		    service: 'QQ',
		    auth: {
		        user: 'kevin.liu@yunzhihui.com',
		        pass: 'xxxxxxx'
		    }
		});
		
		// NB! No need to recreate the transporter object. You can use
		// the same transporter object for all e-mails
		
		// setup e-mail data with unicode symbols
		var mailOptions = {
		    from: 'kevin.liu@yunzhihui.com', // sender address
		    to: '791845283@qq.com', // list of receivers
		    subject: '最新活动公告', // Subject line
		    text: 'Hello world', // plaintext body
		    html: mailHtml // html body
		};
		
		// send mail with defined transport object
		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        console.log(error);
		    }else{
		        console.log('Message sent: ' + info.response);
		    }
		});
		
	}else{
		console.log('文件名或文件路径错误！！');	
		return;
	}
});
